import {
  // ChevronRightIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalCircleIcon,
  ChartBarIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
  ComputerDesktopIcon,
  CubeIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon as DevicePhoneMobileIconOutline,
  BellIcon,
  CodeBracketIcon,
  ExclamationCircleIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
// import { SVGProps } from "react";

const primaryFeatures = [
  {
    name: "IoT Monitoring",
    description:
      "Acompanhe ativos em tempo real com precisão e segurança através do nosso sistema avançado de monitoramento IoT.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Integração com Software",
    description:
      "Ferramentas completas de gestão e análise de dados IoT para facilitar sua tomada de decisões.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Segurança Avançada",
    description:
      "Proteja seus dados e dispositivos com tecnologias avançadas de segurança.",
    href: "#",
    icon: CalendarDaysIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Qualidade Certificada",
    description:
      "Equipamentos homologados pela ANATEL, FCC e CE garantindo a qualidade e segurança dos nossos produtos.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Cobertura Global",
    description:
      "Tecnologia de rastreamento global, para acompanhamento em qualquer lugar do mundo.",
    icon: GlobeAltIcon,
  },
  {
    name: "Aplicativo Fácil e Intuitivo",
    description:
      "Gerencie seus dispositivos facilmente pelo nosso aplicativo móvel com interface amigável.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Suporte Humanizado",
    description:
      "Equipe especializada pronta para auxiliar você em todas as etapas.",
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    name: "Análise Inteligente de Dados",
    description:
      "Obtemos insights estratégicos para o nosso negócio através das nossas plataformas.",
    icon: ChartBarIcon,
  },
  {
    name: "Manutenção Remota",
    description:
      "Realizamos diagnósticos e atualizações remotamente de seus dispositivos para minimizar interrupções.",
    icon: WrenchIcon,
  },
];
const stats = [
  { id: 1, name: "Horas dedicadas", value: "80.000+" },
  { id: 2, name: "Projetos concluídos", value: "8+" },
  { id: 3, name: "Dias de operação", value: "4.500+" },
  { id: 4, name: "Investimento acumulado", value: "10M+" },
];
// const footerNavigation = {
//   solutions: [
//     { name: "Hosting", href: "#" },
//     { name: "Data Services", href: "#" },
//     { name: "Uptime Monitoring", href: "#" },
//     { name: "Enterprise Services", href: "#" },
//   ],
//   support: [
//     { name: "Pricing", href: "#" },
//     { name: "Documentation", href: "#" },
//     { name: "Guides", href: "#" },
//     { name: "API Reference", href: "#" },
//   ],
//   company: [
//     { name: "About", href: "#" },
//     { name: "Blog", href: "#" },
//     { name: "Jobs", href: "#" },
//     { name: "Press", href: "#" },
//     { name: "Partners", href: "#" },
//   ],
//   legal: [
//     { name: "Claim", href: "#" },
//     { name: "Privacy", href: "#" },
//     { name: "Terms", href: "#" },
//   ],
//   social: [
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/bwsiot",
//       icon: (props: SVGProps<SVGSVGElement>) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/bwsiot/",
//       icon: (props: SVGProps<SVGSVGElement>) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     // {
//     //   name: "X",
//     //   href: "#",
//     //   icon: (props: SVGProps<SVGSVGElement>) => (
//     //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//     //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
//     //     </svg>
//     //   ),
//     // },
//     {
//       name: "GitHub",
//       href: "https://github.com/BWS-SOFT",
//       icon: (props: SVGProps<SVGSVGElement>) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "YouTube",
//       href: "https://www.youtube.com/channel/UCTT2zyI52SwIlDIDHf3gdfQ",
//       icon: (props: SVGProps<SVGSVGElement>) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//   ],
// };
const applications = [
  {
    name: "Plataforma de Recuperação de Bens",
    description: "Gerenciamento e rastreamento de bens recuperáveis.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Plataforma de Rastreamento de Bens e Ativos",
    description: "Monitoramento e controle de localização de ativos.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Plataforma de Mensagens para SIMCards (Emnify)",
    description: "Envio de mensagens via API para dispositivos conectados.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "App de Recuperação de Bens",
    description:
      "Aplicativo mobile para facilitar a gestão e monitoramento de bens recuperáveis.",
    icon: DevicePhoneMobileIconOutline,
  },
  {
    name: "App de Rastreamento de Ativos",
    description:
      "Aplicativo móvel para consulta e acompanhamento da localização de bens e ativos.",
    icon: DevicePhoneMobileIconOutline,
  },
  {
    name: "App para Instaladores",
    description:
      "Aplicativo móvel para técnicos realizarem instalação de equipamentos.",
    icon: DevicePhoneMobileIconOutline,
  },
  {
    name: "App para Configuração de Equipamentos",
    description: "Aplicativo móvel para configuração de dispositivos via SMS.",
    icon: DevicePhoneMobileIconOutline,
  },
  {
    name: "Aplicativo de Configuração de Equipamentos",
    description:
      "Software para configuração de dispositivos via comunicação serial.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Biblioteca de Componentes Front-end",
    description:
      "Conjunto de componentes em React para padronização e reutilização na empresa.",
    icon: CubeIcon,
  },
  {
    name: "Landing Page da Empresa PRMA",
    description:
      "Página de divulgação da empresa de recuperação de bens e ativos.",
    icon: DocumentTextIcon,
  },
  {
    name: "Landing Page da Empresa Hybrid",
    description: "Página de divulgação da empresa de produção de software.",
    icon: DocumentTextIcon,
  },
  {
    name: "Microserviço Detecção de alertas",
    description:
      "Monitora eventos em tempo real e identifica alertas com base em regras pré-cadastradas.",
    icon: ExclamationCircleIcon,
  },
  {
    name: "Microserviço de Tratamento e Distribuição de pacotes",
    description: "Processa e roteia pacotes de dados entre sistemas.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Microserviço de Envio de comandos",
    description: "Gera e transmite comandos para dispositivos IoT.",
    icon: CodeBracketIcon,
  },
  {
    name: "Microserviço de Notificação em tempo real",
    description: "Notifica os sistemas em tempo real.",
    icon: BellIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
              <img
                alt="Your Company"
                src="/logo/WFC.svg"
                className="h-12 w-auto"
              />

              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm/6 font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20">
                    Softwares
                  </span>
                  {/* <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                    <span>Lora+NB</span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="size-5 text-gray-500"
                    />
                  </span> */}
                </a>
              </div>
              <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                WFC TECHNOLOGY
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                Soluções inovadoras para rastreamento, IoT e desenvolvimento de
                software.
              </p>
              {/* <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Conhecer mais
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                  alt="App screenshot"
                  src="/MOCK-LAPTOP.png"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-white">
            Nossos parceiros
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="BWS TECHNOLOGY"
              src="/logo/BWS-TECHNOLOGY.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="BWS TRADING"
              src="/logo/BWS-TRADING.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="BWS IOT"
              src="/logo/BWS-IOT.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Hybrid"
              src="/logo/HYBRID.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="PRMA"
              src="/logo/PRMA.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            {/* <img
              alt="BWS Conecta"
              src="/logo/BWS-CONECTA.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            /> */}
            {/* <img
              alt="ICB"
              src="/logo/ICB.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            /> */}
            {/* <img
              alt="WFC"
              src="/logo/WFC.svg"
              width={158}
              height={48}
              className="invert brightness-0 hover:invert-[unset] transition-[filter] duration-300 ease-linear col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            /> */}
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-blue-400">
              Implementação Rápida
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
              Tudo que você precisa para integrar soluções IoT
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Desde rastreamento inteligente até softwares personalizados,
              oferecemos soluções que aceleram sua transformação digital.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-500">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    {/* <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm/6 font-semibold text-blue-400"
                      >
                        Saiba mais <span aria-hidden="true">→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base/7 font-semibold text-blue-400">
                Soluções para o Futuro
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
                Infraestrutura ágil e escalável
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Nossa tecnologia foi projetada para crescer junto com o negócio
                dos nossos parceiros, garantindo segurança e eficiência.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                alt="App screenshot"
                src="/MOCK-MOBILE.png"
                // className="mb-[-5%] rounded-md bg-black/5 shadow-2xl ring-1 ring-white/10"
                className="border border-1 border-white/10 bg-white/5 shadow-2xl rounded-md"
              />
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-blue-500"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base/8 font-semibold text-blue-400">
              Nossa trajetória
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Inovação e excelência em cada passo
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Construímos tecnologia de rastreamento e segurança que transforma
              desafios em soluções inteligentes, sempre com qualidade e
              compromisso.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="text-sm/6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Lista de Aplicações WFC */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-blue-400">
              Lista de Aplicações WFC
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Soluções Inovadoras para Todos os Desafios
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Conheça a variedade de aplicações desenvolvidas para atender as
              demandas de mobilidade, desktop, componentes e presença
              institucional.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {applications.map((app) => (
              <div key={app.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <app.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 size-5 text-blue-500"
                  />
                  {app.name}
                </dt>{" "}
                <dd className="inline">{app.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        {/* <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl pointer-events-none"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Aumente sua produtividade com a WFC TECHNOLOGY
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
              Nossas soluções inteligentes de rastreamento e software garantem
              eficiência, segurança e inovação para o seu negócio.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Conhecer mais
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div> */}
      </main>

      {/* Footer */}
      <footer className="mt-16 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
          {/* <div className="flex justify-center gap-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
                target="_blank"
              >
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div> */}
          <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
            &copy; 2025 WFC Technology, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
