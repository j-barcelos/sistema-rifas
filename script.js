"use strict";

/* ============================================================
   RIFA ROYALE — script.js
   Validação no cliente (DOM/eventos — Michael)
   + Requisições assíncronas com fetch/Ajax (Riordan)
============================================================ */

const formulario = document.querySelector(".formulario");
const camposForm = formulario.querySelectorAll("input, select, textarea");

/* ---------- Helpers de feedback ---------- */

function marcarErro(campo, mensagem) {
    const wrapper = campo.closest(".campo");
    const feedback = wrapper.querySelector(".feedback");

    wrapper.classList.add("invalido");
    wrapper.classList.remove("valido");
    campo.setAttribute("aria-invalid", "true");

    if (feedback) {
        feedback.textContent = mensagem;
        feedback.className = "feedback erro";
    }
}

function marcarValido(campo, mensagem = "") {
    const wrapper = campo.closest(".campo");
    const feedback = wrapper.querySelector(".feedback");

    wrapper.classList.remove("invalido");
    wrapper.classList.add("valido");
    campo.removeAttribute("aria-invalid");

    if (feedback) {
        feedback.textContent = mensagem;
        feedback.className = mensagem ? "feedback sucesso" : "feedback";
    }
}

/* ============================================================
   PARTE 1 — VALIDAÇÃO NO LADO DO CLIENTE
============================================================ */

const validadores = {
    "nome-rifa": (v) =>
        v.trim().length >= 3 || "Informe um nome com pelo menos 3 caracteres.",

    "premio": (v) =>
        v.trim().length >= 3 || "Informe o videogame/prêmio da rifa.",

    "valor": (v) => {
        const valor = parseFloat(v);
        if (Number.isNaN(valor)) return "Informe um valor numérico.";
        return valor >= 1 || "O valor mínimo por número é R$ 1,00.";
    },

    "quantidade": (v) => {
        const qtd = parseInt(v, 10);
        if (!Number.isInteger(qtd)) return "Informe um número inteiro.";
        return (qtd >= 100 && qtd <= 10000) ||
            "A quantidade deve estar entre 100 e 10.000 números.";
    },

    "data-sorteio": (v) => {
        if (!v) return "Selecione a data do sorteio.";
        const sorteio = new Date(v + "T23:59:59");
        const hoje = new Date();
        return sorteio > hoje || "A data do sorteio deve ser futura.";
    },

    "cep": (v) => {
        const digitos = v.replace(/\D/g, "");
        if (!digitos) return "Informe um CEP.";
        return digitos.length === 8 || "O CEP deve ter 8 dígitos.";
    },

    "numero": (v) =>
        /^[0-9]+$/.test(v.trim()) || "Informe o número (somente dígitos).",

    "descricao": (v) =>
        v.trim().length <= 500 || "A descrição deve ter no máximo 500 caracteres.",
};

function validarCampo(campo) {
    const validador = validadores[campo.id];
    if (!validador) return true;

    const resultado = validador(campo.value);

    if (resultado === true) {
        marcarValido(campo);
        return true;
    }
    marcarErro(campo, resultado);
    return false;
}

// Validação em tempo real: dispara ao sair do campo (blur) e ao corrigir
camposForm.forEach((campo) => {
    campo.addEventListener("blur", () => validarCampo(campo));
    campo.addEventListener("input", () => {
        if (campo.closest(".campo").classList.contains("invalido")) {
            validarCampo(campo); // revalida ao corrigir, sem atrapalhar antes
        }
    });
});

// Impede o envio se houver campos inválidos
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let formularioValido = true;
    let primeiroInvalido = null;

    camposForm.forEach((campo) => {
        const ok = validarCampo(campo);
        if (!ok && !primeiroInvalido) primeiroInvalido = campo;
        formularioValido = formularioValido && ok;
    });

    if (!formularioValido) {
        primeiroInvalido.focus();
        return;
    }

    alert("Rifa cadastrada com sucesso! (Aqui entraria a requisição POST ao servidor.)");
    formulario.reset();
    camposForm.forEach((c) =>
        c.closest(".campo")?.classList.remove("valido", "invalido")
    );
});

/* ============================================================
   PARTE 2 — AJAX (FETCH): BUSCA AUTOMÁTICA DE CEP
   API pública: https://viacep.com.br
============================================================ */

const campoCep = document.getElementById("cep");
const camposEndereco = {
    logradouro: document.getElementById("logradouro"),
    bairro: document.getElementById("bairro"),
    cidade: document.getElementById("cidade"),
    uf: document.getElementById("uf"),
};

let timerDebounce = null;

// Máscara simples: mantém apenas dígitos e formata 00000-000
campoCep.addEventListener("input", () => {
    const digitos = campoCep.value.replace(/\D/g, "").slice(0, 8);
    campoCep.value = digitos.replace(/^(\d{5})(\d)/, "$1-$2");
});

// Debounce: espera 600ms após a última tecla para chamar a API
campoCep.addEventListener("input", () => {
    clearTimeout(timerDebounce);
    timerDebounce = setTimeout(buscarCep, 600);
});

campoCep.addEventListener("blur", buscarCep);

async function buscarCep() {
    const digitos = campoCep.value.replace(/\D/g, "");

    if (digitos.length !== 8) return; // CEP incompleto — aguarda

    const wrapper = campoCep.closest(".campo");
    const feedback = wrapper.querySelector(".feedback");

    try {
        // Estado de carregamento
        feedback.innerHTML =
            '<span class="carregando" aria-hidden="true"></span> Buscando endereço...';
        feedback.className = "feedback aviso";
        Object.values(camposEndereco).forEach((c) => (c.value = ""));

        // Requisição assíncrona (Ajax) — ViaCEP
        const resposta = await fetch(`https://viacep.com.br/ws/${digitos}/json/`);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            marcarErro(campoCep, "CEP não encontrado. Verifique e tente novamente.");
            return;
        }

        // Preenchimento dinâmico na tela
        camposEndereco.logradouro.value = dados.logradouro || "";
        camposEndereco.bairro.value = dados.bairro || "";
        camposEndereco.cidade.value = dados.localidade || "";
        camposEndereco.uf.value = dados.uf || "";

        marcarValido(campoCep, `Endereço encontrado: ${dados.localidade} - ${dados.uf}`);
        camposEndereco.logradouro.closest(".campo").classList.add("valido");
    } catch (erro) {
        console.error("Falha na busca de CEP:", erro);
        marcarErro(campoCep, "Não foi possível consultar o CEP agora. Tente novamente.");
    }
}
