
import React, { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    CheckCircle2,
    Code2,
    Globe2,
    Layers3,
    ShoppingCart,
    HelpCircle,
    MessageCircle,
    ClipboardList,
} from "lucide-react";

import Header from "../components/Header";

const steps = ["Projeto", "Funcionalidades", "Detalhes", "Contato"];

const projects = [
    {
        id: "Site institucional",
        title: "Site institucional",
        description: "Apresentação da sua empresa, serviços e contatos",
        icon: Globe2,
    },
    {
        id: "Loja virtual",
        title: "Loja virtual",
        description: "Venda de produtos pela internet",
        icon: ShoppingCart,
    },
    {
        id: "Sistema web",
        title: "Sistema web",
        description: "Área de login, painéis e funcionalidades",
        icon: Layers3,
    },
    {
        id: "Não sei ainda",
        title: "Não sei ainda",
        description: "Preciso de orientação para definir a melhor opção",
        icon: HelpCircle,
    },
];

const features = [
    "Login de usuários",
    "Painel administrativo",
    "Agendamento online",
    "Pagamento online",
    "Integração com WhatsApp",
    "Formulário de contato",
    "Cadastro de produtos",
    "Controle de estoque",
    "Relatórios e indicadores",
    "Blog ou área de conteúdos",
    "Galeria de fotos e vídeos",
    "Integração com sistemas externos",
];

const initialData = {
    project: "",
    login: "",
    sales: "",
    features: [],
    objective: "",
    deadline: "",
    description: "",
    references: "",
    name: "",
    company: "",
    phone: "",
    email: "",
};

const inputClass =
    "w-full rounded-xl border border-[#d9e4f3] bg-white px-4 py-3.5 text-[#0b2448] outline-none transition-colors focus:border-[#155eef] focus:ring-2 focus:ring-blue-100";

function Field({ label, required = false, children }) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-bold text-[#0b2448]">
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}

function Choice({ selected, children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all cursor-pointer ${selected
                ? "border-[#155eef] bg-blue-50 text-[#155eef]"
                : "border-[#d9e4f3] bg-white text-slate-600 hover:border-blue-300"
                }`}
        >
            {children}
        </button>
    );
}

export default function Briefing({
    whatsappNumber = "",
}) {
    const [step, setStep] = useState(0);
    const [data, setData] = useState(initialData);
    const [error, setError] = useState("");

    const update = (field, value) => {
        setData((previous) => ({
            ...previous,
            [field]: value,
        }));
        setError("");
    };

    const toggleFeature = (feature) => {
        setData((previous) => ({
            ...previous,
            features: previous.features.includes(feature)
                ? previous.features.filter((item) => item !== feature)
                : [...previous.features, feature],
        }));
        setError("");
    };

    const validate = () => {
        if (step === 0) {
            if (!data.project || !data.login || !data.sales) {
                return "Responda às perguntas obrigatórias.";
            }
        }

        if (step === 2) {
            if (!data.objective || !data.deadline || !data.description.trim()) {
                return "Preencha as informações obrigatórias do projeto.";
            }
        }

        if (step === 3) {
            if (!data.name.trim() || !data.phone.trim()) {
                return "Informe seu nome e WhatsApp.";
            }

            if (data.phone.replace(/\D/g, "").length < 10) {
                return "Informe um telefone válido com DDD.";
            }

            if (
                data.email.trim() &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
            ) {
                return "Informe um e-mail válido.";
            }
        }

        return "";
    };

    const next = () => {
        const message = validate();

        if (message) {
            setError(message);
            return;
        }

        setStep((current) => Math.min(current + 1, 3));
        setError("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const back = () => {
        setStep((current) => Math.max(current - 1, 0));
        setError("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const sendWhatsApp = () => {
        const message = validate();

        if (message) {
            setError(message);
            return;
        }

        const number = whatsappNumber.replace(/\D/g, "");

        if (!number) {
            setError("Número de WhatsApp não configurado.");
            return;
        }

        const text = [
            "*NOVO PEDIDO DE ORÇAMENTO*",
            "",
            "*1. PROJETO*",
            `Tipo: ${data.project}`,
            `Precisa de login: ${data.login}`,
            `Venda de produtos/serviços: ${data.sales}`,
            "",
            "*2. FUNCIONALIDADES*",
            data.features.length
                ? data.features.map((item) => `• ${item}`).join("\n")
                : "Não informadas",
            "",
            "*3. DETALHES*",
            `Objetivo: ${data.objective}`,
            `Prazo: ${data.deadline}`,
            `Descrição: ${data.description}`,
            `Referências: ${data.references || "Não informadas"}`,
            "",
            "*4. CONTATO*",
            `Nome: ${data.name}`,
            `Empresa: ${data.company || "Não informada"}`,
            `WhatsApp: ${data.phone}`,
            `E-mail: ${data.email || "Não informado"}`,
            "",
            "Enviado pelo briefing do site Nailson Rocha.",
        ].join("\n");

        const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

        window.location.href = url;
    };

    return (
        <div className="min-h-screen bg-[#f8faff] text-[#0b2448]">
            <Header />

            <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
                {/* Apresentação */}
                <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                    <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-blue-100 px-4 py-2 text-sm font-bold text-[#155eef]">
                            <ClipboardList size={18} />
                            Briefing de Projeto
                        </div>

                        <h1 className="text-4xl font-black tracking-tight text-[#09162b] sm:text-5xl">
                            Solicite seu orçamento
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Conte um pouco sobre seu projeto. Responda ao briefing
                            abaixo e receba um orçamento personalizado pelo WhatsApp.
                        </p>
                    </div>

                    <div className="hidden lg:flex h-44 w-64 items-center justify-center rounded-4xl bg-blue-50">
                        <div className="relative flex h-28 w-40 items-center justify-center rounded-xl border-4 border-[#155eef] bg-white shadow-xl">
                            <Code2 size={54} className="text-[#155eef]" />
                            <div className="absolute -bottom-3 h-3 w-24 rounded-b-xl bg-[#155eef]" />
                        </div>
                    </div>
                </div>

                {/* Indicador de progresso */}
                <div className="mb-12">
                    <div className="relative mx-auto max-w-4xl">
                        <div className="absolute left-[12.5%] right-[12.5%] top-6 h-1 rounded-full bg-[#e0e7f2]">
                            <div
                                className="h-full rounded-full bg-[#155eef] transition-all duration-500"
                                style={{
                                    width: `${(step / 3) * 100}%`,
                                }}
                            />
                        </div>

                        <div className="relative grid grid-cols-4 gap-2">
                            {steps.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${index <= step
                                            ? "bg-[#155eef] text-white shadow-lg shadow-blue-200"
                                            : "bg-[#e7ecf5] text-slate-500"
                                            }`}
                                    >
                                        {index < step ? <Check size={20} /> : index + 1}
                                    </div>

                                    <span
                                        className={`text-center text-xs sm:text-sm ${index === step
                                            ? "font-bold text-[#09162b]"
                                            : "text-slate-500"
                                            }`}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Formulário */}
                <div className="rounded-3xl border border-[#e3eaf4] bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10">
                    {/* ETAPA 1 */}
                    {step === 0 && (
                        <div className="space-y-9">
                            <h2 className="text-2xl font-black">
                                1. Sobre o seu projeto
                            </h2>

                            <Field label="Qual tipo de projeto você deseja?" required>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    {projects.map((project) => {
                                        const Icon = project.icon;
                                        const selected = data.project === project.id;

                                        return (
                                            <button
                                                key={project.id}
                                                type="button"
                                                onClick={() => update("project", project.id)}
                                                aria-pressed={selected}
                                                className={`relative flex min-h-44 cursor-pointer flex-col items-start rounded-2xl border p-5 text-left transition-all ${selected
                                                    ? "border-[#155eef] bg-blue-50/60 shadow-sm ring-1 ring-[#155eef]"
                                                    : "border-[#d9e4f3] hover:border-blue-300"
                                                    }`}
                                            >
                                                {selected && (
                                                    <CheckCircle2
                                                        size={22}
                                                        className="absolute right-4 top-4 text-[#155eef]"
                                                    />
                                                )}

                                                <Icon
                                                    size={32}
                                                    className={selected ? "text-[#155eef]" : "text-slate-600"}
                                                />

                                                <span className="mt-4 font-bold">
                                                    {project.title}
                                                </span>

                                                <span className="mt-2 text-sm leading-6 text-slate-500">
                                                    {project.description}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </Field>

                            <Field label="O projeto precisa de uma tela de login?" required>
                                <div className="flex flex-wrap gap-3">
                                    {["Sim", "Não", "Ainda não sei"].map((value) => (
                                        <Choice
                                            key={value}
                                            selected={data.login === value}
                                            onClick={() => update("login", value)}
                                        >
                                            {value}
                                        </Choice>
                                    ))}
                                </div>
                            </Field>

                            <div className="border-t border-slate-100 pt-7">
                                <Field
                                    label="Você pretende vender produtos ou serviços pelo site?"
                                    required
                                >
                                    <div className="flex flex-wrap gap-3">
                                        {["Sim", "Não", "Talvez"].map((value) => (
                                            <Choice
                                                key={value}
                                                selected={data.sales === value}
                                                onClick={() => update("sales", value)}
                                            >
                                                {value}
                                            </Choice>
                                        ))}
                                    </div>
                                </Field>
                            </div>
                        </div>
                    )}

                    {/* ETAPA 2 */}
                    {step === 1 && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-black">
                                    2. Funcionalidades
                                </h2>

                                <p className="mt-3 text-slate-500">
                                    Selecione os recursos que você gostaria de incluir
                                    no seu projeto. Pode marcar várias opções.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {features.map((feature) => {
                                    const selected = data.features.includes(feature);

                                    return (
                                        <button
                                            key={feature}
                                            type="button"
                                            onClick={() => toggleFeature(feature)}
                                            aria-pressed={selected}
                                            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-left text-sm font-medium transition-all ${selected
                                                ? "border-[#155eef] bg-blue-50 text-[#155eef]"
                                                : "border-[#d9e4f3] text-slate-600 hover:border-blue-300"
                                                }`}
                                        >
                                            <span
                                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${selected
                                                    ? "border-[#155eef] bg-[#155eef] text-white"
                                                    : "border-slate-300"
                                                    }`}
                                            >
                                                {selected && <Check size={14} />}
                                            </span>

                                            {feature}
                                        </button>
                                    );
                                })}
                            </div>

                            <p className="text-sm text-slate-400">
                                Não sabe quais funcionalidades escolher? Sem problema.
                                Podemos definir isso juntos.
                            </p>
                        </div>
                    )}

                    {/* ETAPA 3 */}
                    {step === 2 && (
                        <div className="space-y-7">
                            <div>
                                <h2 className="text-2xl font-black">
                                    3. Detalhes do projeto
                                </h2>

                                <p className="mt-3 text-slate-500">
                                    Agora precisamos entender melhor sua ideia.
                                </p>
                            </div>

                            <Field label="Qual é o principal objetivo do projeto?" required>
                                <select
                                    value={data.objective}
                                    onChange={(e) => update("objective", e.target.value)}
                                    className={inputClass}
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="Apresentar minha empresa">
                                        Apresentar minha empresa
                                    </option>
                                    <option value="Vender pela internet">
                                        Vender pela internet
                                    </option>
                                    <option value="Automatizar processos">
                                        Automatizar processos
                                    </option>
                                    <option value="Gerenciar meu negócio">
                                        Gerenciar meu negócio
                                    </option>
                                    <option value="Outro objetivo">
                                        Outro objetivo
                                    </option>
                                </select>
                            </Field>

                            <Field label="Qual o prazo desejado?" required>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Até 15 dias",
                                        "Até 30 dias",
                                        "Até 60 dias",
                                        "Sem prazo definido",
                                    ].map((value) => (
                                        <Choice
                                            key={value}
                                            selected={data.deadline === value}
                                            onClick={() => update("deadline", value)}
                                        >
                                            {value}
                                        </Choice>
                                    ))}
                                </div>
                            </Field>

                            <Field label="Descreva seu projeto" required>
                                <textarea
                                    rows={6}
                                    maxLength={1500}
                                    value={data.description}
                                    onChange={(e) => update("description", e.target.value)}
                                    placeholder="Conte o que você precisa, como imagina o funcionamento e outras informações importantes..."
                                    className={`${inputClass} resize-y`}
                                />

                                <p className="text-right text-xs text-slate-400">
                                    {data.description.length}/1500
                                </p>
                            </Field>

                            <Field label="Possui algum site ou sistema de referência?">
                                <textarea
                                    rows={3}
                                    maxLength={600}
                                    value={data.references}
                                    onChange={(e) => update("references", e.target.value)}
                                    placeholder="Cole links ou descreva suas referências (opcional)"
                                    className={`${inputClass} resize-y`}
                                />
                            </Field>
                        </div>
                    )}

                    {/* ETAPA 4 */}
                    {step === 3 && (
                        <div className="space-y-7">
                            <div>
                                <h2 className="text-2xl font-black">
                                    4. Informações de contato
                                </h2>

                                <p className="mt-3 text-slate-500">
                                    Estamos quase terminando! Informe seus dados para
                                    que possamos conversar sobre seu projeto.
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <Field label="Nome completo" required>
                                    <input
                                        type="text"
                                        maxLength={100}
                                        value={data.name}
                                        onChange={(e) => update("name", e.target.value)}
                                        placeholder="Seu nome completo"
                                        className={inputClass}
                                    />
                                </Field>

                                <Field label="Nome da empresa">
                                    <input
                                        type="text"
                                        maxLength={120}
                                        value={data.company}
                                        onChange={(e) => update("company", e.target.value)}
                                        placeholder="Nome da empresa (opcional)"
                                        className={inputClass}
                                    />
                                </Field>

                                <Field label="WhatsApp com DDD" required>
                                    <input
                                        type="tel"
                                        maxLength={20}
                                        value={data.phone}
                                        onChange={(e) => update("phone", e.target.value)}
                                        placeholder="(71) 99999-9999"
                                        className={inputClass}
                                    />
                                </Field>

                                <Field label="E-mail">
                                    <input
                                        type="email"
                                        maxLength={150}
                                        value={data.email}
                                        onChange={(e) => update("email", e.target.value)}
                                        placeholder="voce@exemplo.com"
                                        className={inputClass}
                                    />
                                </Field>
                            </div>

                            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                                <div className="flex items-start gap-3">
                                    <MessageCircle
                                        size={24}
                                        className="shrink-0 text-[#155eef]"
                                    />

                                    <div>
                                        <h3 className="font-bold">
                                            Envio pelo WhatsApp
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Ao finalizar, abriremos o WhatsApp com suas
                                            respostas organizadas. Basta revisar e confirmar
                                            o envio da mensagem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Erro */}
                    {error && (
                        <p
                            role="alert"
                            className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                        >
                            {error}
                        </p>
                    )}

                    {/* Navegação */}
                    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-8">
                        {step > 0 ? (
                            <button
                                type="button"
                                onClick={back}
                                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#d9e4f3] px-6 py-3.5 font-bold text-slate-600 transition-colors hover:bg-slate-50"
                            >
                                <ArrowLeft size={18} />
                                Voltar
                            </button>
                        ) : (
                            <span />
                        )}

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={next}
                                className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#155eef] px-7 py-4 font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-[#0c48cb]"
                            >
                                Próximo passo
                                <ArrowRight size={19} />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={sendWhatsApp}
                                className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#155eef] px-7 py-4 font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-[#0c48cb]"
                            >
                                Enviar pelo WhatsApp
                                <MessageCircle size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Rodapé */}
                <footer className="mt-12 text-center text-sm text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Nailson Rocha.
                        Todos os direitos reservados.
                    </p>

                    <p className="mt-2">
                        Desenvolvimento de soluções digitais personalizadas.
                    </p>
                </footer>
            </main>
        </div>
    );
}
