# 🏭 Inteligência Artificial na Indústria 4.0
> **Projeto Acadêmico & Dossiê Interativo** desenvolvido para apresentação no **EITA (Encontro Inclusivo de Tecnologia Anhanguera)**.

![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Anhanguera](https://img.shields.io/badge/Faculdade-Anhanguera-F05A22?style=for-the-badge)

---

## 📌 Sobre o Projeto

Este projeto é uma aplicação web interativa concebida para apresentar uma pesquisa aprofundada sobre **o papel e o protagonismo da Inteligência Artificial na Indústria 4.0**, com ênfase especial na transformação da cadeia de suprimentos (**Supply Chain 4.0**), armazenagem automatizada e logística preditiva.

O trabalho foi desenvolvido sob a orientação e proposta do **Professor Leonardo**, integrando o calendário acadêmico da **Faculdade Anhanguera** no evento **EITA (Encontro Inclusivo de Tecnologia Anhanguera)**.

A proposta une **rigor acadêmico de pesquisa** a uma **experiência digital de ponta**, inspirada nas diretrizes de design editorial e brutalismo industrial premiados no [Awwwards](https://www.awwwards.com/).

---

## 🔬 Tópicos e Estrutura da Pesquisa

O dossiê interativo foi estruturado em módulos progressivos de aprendizagem:

1. **Abertura // Tese & Telemetria:**
   - Apresentação do tema com animação tipográfica cinemática via **GSAP SplitText**.
   - Moldura técnica de engenharia com telemetria e fita contínua (*ticker marquee*) de transição.

2. **Capítulo 01 // A Quarta Revolução Industrial:**
   - Origem e contextualização da Indústria 4.0.
   - Hiperconectividade e sensores de **Internet das Coisas (IoT)**.
   - Aplicação de **Machine Learning** e **Big Data** para tomadas de decisão autônomas em tempo real.

3. **Capítulo 02 // A IA na Logística (Supply Chain 4.0):**
   - Integração da automação fabril com a cadeia de suprimentos.
   - Armazenagem e expedição robótica livre de falhas humanas associadas ao trabalho repetitivo.
   - Algoritmos multivariáveis que cruzam dados climáticos, tráfego e rotas.

4. **Capítulo 03 // Dossiês de Mercado (Estudos de Caso):**
   - **Natura (Brasil):** Armazenagem vertical automatizada, picking inteligente e algoritmos de previsão de demanda para entregas em escala continental.
   - **Lenovo (Multinacional):** Supply chain resiliente global orquestrado por Gêmeos Digitais (*Digital Twins*) e inteligência artificial para mitigação de riscos de escassez.

5. **Capítulo 04 // A China como Referência Global:**
   - Armazéns tridimensionais automatizados verticais de alta densidade.
   - Entregas comerciais de última milha (*last mile*) via drones desde 2016, com redução comprovada de **80% nos custos operacionais** e redução drástica no tempo de transporte.
   - Infraestrutura de conectividade **5G** e integração de frotas autônomas *(Wang; Zhang, 2022)*.

6. **Capítulo 05 // Conclusão Estrutural:**
   - A Inteligência Artificial não apenas como recurso auxiliar, mas como o **cérebro operacional e a espinha dorsal mandatória** para a competitividade na economia global contemporânea.

---

## 🎨 Direção de Arte e UX/UI (Estilo Awwwards)

Ao contrário dos modelos convencionais e genéricos de páginas geradas por IA, a interface foi desenhada seguindo a linguagem do **Editorial Suíço & Brutalismo Industrial**:

- **Paleta de Cores de Alta Precisão:** Grafite profundo (`#080d19`), contraste nítido (`#f1f5f9`) e realce em **Laranja Industrial** (`#F05A22`), complementado com toques de identidade de marca para a Natura (`#10b981`) e Lenovo (`#ef4444`).
- **Diagramação Editorial Assimétrica:** Grid arquitetônico (divisão 5/7) com tipografia de leitura confortável (*Montserrat*) e títulos imponentes em caixa-alta (*Unbounded*).
- **Elementos Gráficos Técnicos:** Miras de cantoneira (`+`), identificadores de documento técnico (`[ 01 // VISÃO GERAL ]`), carimbos bibliográficos e legendas de figura em estilo *blueprint*.
- **Motion Design Avançado:** Rolagem ultra suave com **GSAP ScrollSmoother**, animação tipográfica por caractere com **SplitText** e revelações coordenadas por **ScrollTrigger**.
- **Totalmente Responsivo:** Experiência consistente e fluida em celulares, tablets e monitores ultrawide.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/):** Biblioteca para interfaces de usuário modulares baseadas em componentes.
- **[Vite](https://vitejs.dev/):** Ferramenta de build de última geração com alta performance e Hot Module Replacement (HMR).
- **[Tailwind CSS v4](https://tailwindcss.com/):** Novo motor de estilização com diretiva `@theme` e compilação ultra rápida.
- **[GSAP 3 (GreenSock)](https://gsap.com/):**
  - `@gsap/react` com hook `useGSAP`.
  - `ScrollSmoother` para rolagem inercial cinemática.
  - `ScrollTrigger` para animações disparadas na rolagem.
  - `SplitText` para quebra e animação procedural de caracteres.

---

## 📂 Organização de Pastas

```bash
industria4/
├── public/
│   └── images/
│       └── banner_abertura_saida_jpg.jpg   # Imagem técnica da figura de abertura
├── src/
│   ├── assets/                             # Assets auxiliares do projeto
│   ├── components/
│   │   └── TechTicker.jsx                  # Fita contínua (Marquee) industrial
│   ├── sections/
│   │   ├── NavBar.jsx                      # Navegação fixa flutuante + Mobile Menu
│   │   ├── Hero.jsx                        # Abertura com SplitText e metadados
│   │   ├── Introduction.jsx                # 01 // Visão Geral da Indústria 4.0
│   │   ├── Logistics.jsx                   # 02 // Supply Chain 4.0
│   │   ├── Cases.jsx                       # 03 // Dossiês Natura & Lenovo
│   │   ├── China.jsx                       # 04 // Logística 4.0 na China & Métrica -80%
│   │   ├── Conclusion.jsx                  # 05 // Síntese e Cérebro das Operações
│   │   └── Footer.jsx                      # Rodapé técnico e links de ancoragem
│   ├── App.jsx                             # Orquestrador do ScrollSmoother e seções
│   ├── index.css                           # Tema Tailwind v4, tipografia e utilitários
│   └── main.jsx                            # Ponto de entrada da aplicação React
├── package.json
└── README.md
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em seu computador (versão 18 ou superior recomendada).

### 1. Clonar ou Acessar o Diretório
```bash
cd industria4
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse o link informado no terminal (geralmente `http://localhost:5173`) em seu navegador.

### 4. Gerar o Build de Produção
```bash
npm run build
```
Para pré-visualizar o build de produção:
```bash
npm run preview
```

---

## 📚 Referências Bibliográficas

- **WANG, X.; ZHANG, Y.** *Logística Inteligente e Automação na Indústria 4.0: Casos e Práticas Globais*. Pequim: 2022.
- **SCHWAB, Klaus.** *A Quarta Revolução Industrial*. Genebra: Fórum Econômico Mundial, 2016.
- Dados e documentações públicas sobre as operações logísticas da **Natura Cosméticos S/A** e **Lenovo Group Ltd.**

---

## 👥 Créditos & Agradecimentos

- **Evento:** EITA — Encontro Inclusivo de Tecnologia Anhanguera
- **Orientação:** Prof. Leonardo
- **Instituição:** Faculdade Anhanguera
- **Desenvolvimento & Pesquisa:** Equipe de Alunos do Projeto Indústria 4.0

---

<p align="center">
  <sub>Construído com React, GSAP e Tailwind CSS • Apresentação EITA • Faculdade Anhanguera</sub>
</p>
