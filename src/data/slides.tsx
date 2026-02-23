import React from 'react';

export type LayoutType = 'title' | 'split' | 'bullets' | 'table' | 'code' | 'quote';

export interface SlideData {
  id: string;
  title?: string;
  subtitle?: string;
  layout: LayoutType;
  content?: React.ReactNode;
  image?: string;
  pptx?: {
    title?: string;
    subtitle?: string;
    bullets?: string[];
    code?: string;
    image?: string;
    table?: string[][];
  };
}

export const slides: SlideData[] = [
  {
    id: '1-title',
    layout: 'title',
    title: 'Documentos Essenciais para Code Agents de IA',
    subtitle: 'O cenário de IA em 2026, Claude Code e as melhores práticas para o seu ecossistema.',
    pptx: {
      title: 'Documentos Essenciais para Code Agents de IA',
      subtitle: 'O cenário de IA em 2026, Claude Code e as melhores práticas para o seu ecossistema.',
    }
  },
  {
    id: '2-cenario',
    layout: 'split',
    title: 'O Cenário de IA em 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
    content: (
      <ul className="space-y-6 text-2xl text-gray-300">
        <li>
          <strong className="text-white">Evolução Frenética:</strong> Todo dia surge uma nova ferramenta, agente ou framework. O stack de ontem já é obsoleto hoje.
        </li>
        <li>
          <strong className="text-white">A Guerra das Big Techs:</strong>
          <ul className="list-disc pl-8 mt-2 space-y-2 text-xl text-gray-400">
            <li><span className="text-blue-400">EUA (Google, OpenAI, Anthropic):</span> Modelos multimodais gigantescos e ecossistemas fechados.</li>
            <li><span className="text-red-400">China (DeepSeek, Moonshot, Zhipu):</span> Inundação de modelos open-source otimizados com custo de inferência quase zero.</li>
          </ul>
        </li>
        <li>
          <strong className="text-white">O Fim da Fidelidade:</strong> Ser fiel a uma única API morreu. O jogo agora é não ficar refém de nenhum modelo.
        </li>
      </ul>
    ),
    pptx: {
      title: 'O Cenário de IA em 2026',
      bullets: [
        'Evolução Frenética: Todo dia surge uma nova ferramenta. O stack de ontem já é obsoleto hoje.',
        'A Guerra das Big Techs:',
        '  - EUA (Google, OpenAI, Anthropic): Modelos multimodais gigantescos e ecossistemas fechados.',
        '  - China (DeepSeek, Moonshot, Zhipu): Inundação de modelos open-source otimizados.',
        'O Fim da Fidelidade: Ser fiel a uma única API morreu. O jogo agora é não ficar refém de nenhum modelo.'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg'
    }
  },
  {
    id: '3-claude-code',
    layout: 'split',
    title: 'O que é o Claude Code?',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
    content: (
      <div className="space-y-6 text-2xl text-gray-300">
        <p>
          Pense nele como um <strong className="text-emerald-400">dev júnior vivendo no seu terminal</strong>.
        </p>
        <ul className="list-disc pl-8 space-y-4">
          <li>Lê o seu código e entende a estrutura do projeto.</li>
          <li>Edita arquivos e roda comandos autonomamente.</li>
          <li><strong className="text-white">Segurança em 1º lugar:</strong> Pede permissão antes de fazer qualquer ação destrutiva.</li>
          <li>Pode ser usado no terminal, na IDE, no desktop ou no navegador.</li>
        </ul>
      </div>
    ),
    pptx: {
      title: 'O que é o Claude Code?',
      bullets: [
        'Pense nele como um dev júnior vivendo no seu terminal.',
        'Lê o seu código e entende a estrutura do projeto.',
        'Edita arquivos e roda comandos autonomamente.',
        'Segurança em 1º lugar: Pede permissão antes de fazer qualquer ação destrutiva.',
        'Pode ser usado no terminal, na IDE, no desktop ou no navegador.'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg'
    }
  },
  {
    id: '4-como-funciona',
    layout: 'bullets',
    title: 'Como funciona por baixo dos panos?',
    content: (
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-emerald-400">O Ciclo de Trabalho</h3>
          <ul className="space-y-6 text-2xl text-gray-300">
            <li><strong className="text-white">1. Observa:</strong> Lê arquivos, estrutura de pastas e histórico do Git. Faz o onboarding sozinho.</li>
            <li><strong className="text-white">2. Pensa:</strong> Decide o que precisa fazer para resolver o seu pedido.</li>
            <li><strong className="text-white">3. Age:</strong> Cria arquivos, roda testes, busca erros. Mão na massa.</li>
          </ul>
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-blue-400">Diferenciais</h3>
          <ul className="space-y-6 text-2xl text-gray-300">
            <li><strong className="text-white">Contexto Inteligente:</strong> Seleciona apenas o relevante para não estourar tokens.</li>
            <li><strong className="text-white">Execução Real:</strong> Roda comandos de verdade no terminal (ex: <code>npm test</code>).</li>
            <li><strong className="text-white">Segurança:</strong> Autorização explícita para comandos perigosos.</li>
            <li><strong className="text-white">MCP:</strong> Conecta-se a DBs, Google Drive, Slack, etc.</li>
          </ul>
        </div>
      </div>
    ),
    pptx: {
      title: 'Como funciona por baixo dos panos?',
      bullets: [
        'O Ciclo de Trabalho:',
        '  1. Observa: Lê arquivos, estrutura de pastas e histórico do Git.',
        '  2. Pensa: Decide o que precisa fazer para resolver o seu pedido.',
        '  3. Age: Cria arquivos, roda testes, busca erros.',
        'Diferenciais:',
        '  - Contexto Inteligente: Seleciona apenas o relevante.',
        '  - Execução Real: Roda comandos de verdade no terminal.',
        '  - Segurança: Autorização explícita para comandos perigosos.',
        '  - MCP: Conecta-se a DBs, Google Drive, Slack, etc.'
      ]
    }
  },
  {
    id: '5-inicio-rapido',
    layout: 'code',
    title: 'Início Rápido',
    content: (
      <div className="space-y-6">
        <p className="text-2xl text-gray-300">Começar a usar o Claude Code é simples e direto no terminal:</p>
        <pre className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-2xl font-mono text-emerald-400 shadow-2xl overflow-x-auto">
          <code>
<span className="text-gray-500"># Navegue até a raiz do seu projeto</span>{'\n'}
<span className="text-blue-400">cd</span> your-project{'\n\n'}
<span className="text-gray-500"># Inicialize o Claude Code</span>{'\n'}
<span className="text-emerald-400">claude</span>{'\n\n'}
<span className="text-gray-500"># Gere a documentação do projeto</span>{'\n'}
<span className="text-purple-400">/init</span>
          </code>
        </pre>
      </div>
    ),
    pptx: {
      title: 'Início Rápido',
      code: '# Navegue até a raiz do seu projeto\ncd your-project\n\n# Inicialize o Claude Code\nclaude\n\n# Gere a documentação do projeto\n/init'
    }
  },
  {
    id: '6-outros-agentes',
    layout: 'bullets',
    title: 'Posso usar outros agentes no Claude Code?',
    content: (
      <div className="space-y-8 text-2xl text-gray-300">
        <p className="text-3xl text-white font-medium">
          Sim! Você não está preso à Anthropic.
        </p>
        <p>
          É possível utilizar modelos externos (como Ollama ou OpenRouter) configurando variáveis de ambiente para redirecionar as chamadas de API, aproveitando a compatibilidade nativa.
        </p>
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
          <ul className="list-disc pl-8 space-y-3 font-mono text-xl text-emerald-300">
            <li>export ANTHROPIC_BASE_URL="seu-servidor"</li>
            <li>export ANTHROPIC_AUTH_TOKEN="sua-chave"</li>
            <li>export ANTHROPIC_MODEL="nome-do-modelo"</li>
          </ul>
        </div>
        <p>
          <strong>Dica:</strong> Utilize o <span className="text-blue-400">LiteLLM</span> como proxy para suporte a outros formatos.
        </p>
        <div className="flex gap-4 mt-8">
          <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-semibold text-white">GLM-5 (z.ai)</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-semibold text-white">Kimi k2.5 (Moonshot AI)</span>
        </div>
      </div>
    ),
    pptx: {
      title: 'Posso usar outros agentes no Claude Code?',
      bullets: [
        'Sim! Você não está preso à Anthropic.',
        'É possível utilizar modelos externos (como Ollama ou OpenRouter) configurando variáveis de ambiente.',
        'export ANTHROPIC_BASE_URL="seu-servidor"',
        'export ANTHROPIC_AUTH_TOKEN="sua-chave"',
        'export ANTHROPIC_MODEL="nome-do-modelo"',
        'Dica: Utilize o LiteLLM como proxy para suporte a outros formatos.',
        'Exemplos de modelos: GLM-5 (z.ai), Kimi k2.5 (Moonshot AI)'
      ]
    }
  },
  {
    id: '7-claude-projects',
    layout: 'bullets',
    title: 'Claude Projects',
    content: (
      <div className="space-y-6 text-2xl text-gray-300">
        <p>
          Projetos permitem criar <strong className="text-white">espaços de trabalho independentes</strong> com seus próprios históricos de bate-papo e bases de conhecimento.
        </p>
        <ul className="list-disc pl-8 space-y-4">
          <li><strong>Conhecimento do Projeto:</strong> Carregue documentos, códigos e arquivos para dar contexto ao Claude.</li>
          <li><strong>Instruções Específicas:</strong> Defina o tom, a formalidade ou a perspectiva (ex: "aja como um Arquiteto de Software sênior").</li>
          <li><strong>O Arquivo Mágico:</strong> Quando o projeto é iniciado (<code>/init</code>), é gerado o arquivo <code className="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">CLAUDE.md</code>, que atua como o cérebro do projeto.</li>
        </ul>
      </div>
    ),
    pptx: {
      title: 'Claude Projects',
      bullets: [
        'Projetos permitem criar espaços de trabalho independentes com seus próprios históricos e bases de conhecimento.',
        'Conhecimento do Projeto: Carregue documentos, códigos e arquivos para dar contexto ao Claude.',
        'Instruções Específicas: Defina o tom, a formalidade ou a perspectiva.',
        'O Arquivo Mágico: Quando o projeto é iniciado (/init), é gerado o arquivo CLAUDE.md, que atua como o cérebro do projeto.'
      ]
    }
  },
  {
    id: '8-skills',
    layout: 'split',
    title: 'O que são Skills?',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    content: (
      <div className="space-y-6 text-xl text-gray-300">
        <p>
          Skills são pastas de instruções, scripts e recursos carregados dinamicamente para tarefas especializadas.
        </p>
        <pre className="bg-gray-900 p-4 rounded-xl text-sm font-mono text-gray-400 border border-gray-800">
          mkdir -p ~/.claude/skills/explain-code
        </pre>
        <p>Toda skill precisa de um arquivo <code className="text-emerald-400">SKILL.md</code> contendo:</p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>Frontmatter YAML:</strong> Diz ao Claude quando usar (name, description).</li>
          <li><strong>Conteúdo Markdown:</strong> As instruções passo-a-passo.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          O campo `name` se torna um slash-command (ex: `/explain-code`).
        </p>
      </div>
    ),
    pptx: {
      title: 'O que são Skills?',
      bullets: [
        'Skills são pastas de instruções, scripts e recursos carregados dinamicamente para tarefas especializadas.',
        'mkdir -p ~/.claude/skills/explain-code',
        'Toda skill precisa de um arquivo SKILL.md contendo:',
        '  - Frontmatter YAML: Diz ao Claude quando usar (name, description).',
        '  - Conteúdo Markdown: As instruções passo-a-passo.',
        'O campo `name` se torna um slash-command (ex: `/explain-code`).'
      ]
    }
  },
  {
    id: '9-claude-vs-skill',
    layout: 'table',
    title: 'CLAUDE.md vs Skill',
    content: (
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
        <table className="w-full text-left text-xl">
          <thead className="bg-gray-800/50 text-gray-200">
            <tr>
              <th className="p-6 font-semibold">Aspecto</th>
              <th className="p-6 font-semibold text-emerald-400">CLAUDE.md</th>
              <th className="p-6 font-semibold text-blue-400">Skill</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-300">
            <tr>
              <td className="p-6 font-medium text-white">Carregamento</td>
              <td className="p-6">A cada sessão, automaticamente</td>
              <td className="p-6">Sob demanda</td>
            </tr>
            <tr>
              <td className="p-6 font-medium text-white">Incluir arquivos</td>
              <td className="p-6">Sim, com importações @path</td>
              <td className="p-6">Sim, com importações @path</td>
            </tr>
            <tr>
              <td className="p-6 font-medium text-white">Disparar fluxos</td>
              <td className="p-6 text-red-400">Não</td>
              <td className="p-6 text-emerald-400">Sim, com /&lt;name&gt;</td>
            </tr>
            <tr>
              <td className="p-6 font-medium text-white">Melhor para</td>
              <td className="p-6">Regras "sempre faça X"</td>
              <td className="p-6">Material de referência, fluxos invocáveis</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    pptx: {
      title: 'CLAUDE.md vs Skill',
      table: [
        ['Aspecto', 'CLAUDE.md', 'Skill'],
        ['Carregamento', 'A cada sessão, automaticamente', 'Sob demanda'],
        ['Incluir arquivos', 'Sim, com importações @path', 'Sim, com importações @path'],
        ['Disparar fluxos', 'Não', 'Sim, com /<name>'],
        ['Melhor para', 'Regras "sempre faça X"', 'Material de referência, fluxos invocáveis']
      ]
    }
  },
  {
    id: '10-mcp',
    layout: 'bullets',
    title: 'Conectar a ferramentas via MCP',
    content: (
      <div className="space-y-6 text-2xl text-gray-300">
        <p>
          O <strong className="text-white">Model Context Protocol (MCP)</strong> é um padrão open-source que conecta o Claude Code a centenas de ferramentas, bancos de dados e APIs.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-semibold mb-2">Jira / GitHub</h4>
            <p className="text-lg">"Adicione o recurso do problema JIRA ENG-4521 e crie um PR no GitHub."</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h4 className="text-blue-400 font-semibold mb-2">Sentry / Statsig</h4>
            <p className="text-lg">"Verifique o Sentry para monitorar o uso do recurso ENG-4521."</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h4 className="text-purple-400 font-semibold mb-2">PostgreSQL</h4>
            <p className="text-lg">"Encontre emails de 10 usuários que usaram o recurso, no banco de dados."</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h4 className="text-pink-400 font-semibold mb-2">Figma / Slack</h4>
            <p className="text-lg">"Atualize o modelo de email com base nos novos designs postados no Slack."</p>
          </div>
        </div>
      </div>
    ),
    pptx: {
      title: 'Conectar a ferramentas via MCP',
      bullets: [
        'O Model Context Protocol (MCP) é um padrão open-source que conecta o Claude Code a centenas de ferramentas, bancos de dados e APIs.',
        'Jira / GitHub: "Adicione o recurso do problema JIRA ENG-4521 e crie um PR no GitHub."',
        'Sentry / Statsig: "Verifique o Sentry para monitorar o uso do recurso ENG-4521."',
        'PostgreSQL: "Encontre emails de 10 usuários que usaram o recurso, no banco de dados."',
        'Figma / Slack: "Atualize o modelo de email com base nos novos designs postados no Slack."'
      ]
    }
  },
  {
    id: '11-alem-do-claude-md',
    layout: 'bullets',
    title: 'Além do CLAUDE.md: Docs de Contexto',
    content: (
      <div className="space-y-4 text-xl text-gray-300">
        <p className="mb-6">Arquivos que transformam o Claude num dev que realmente conhece seu projeto:</p>
        <ul className="space-y-4">
          <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <strong className="text-emerald-400">architecture.md:</strong> Diagramas, camadas, fluxos e decisões arquiteturais. <span className="text-gray-500 text-sm block mt-1">→ Evita que o Claude proponha soluções que quebram a arquitetura.</span>
          </li>
          <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <strong className="text-blue-400">tech-stack.md:</strong> Versões exatas (React 19, Tailwind 4), libs proibidas. <span className="text-gray-500 text-sm block mt-1">→ Economiza tokens e evita invenções de bibliotecas.</span>
          </li>
          <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <strong className="text-purple-400">coding-guidelines.md:</strong> Regras de estilo, TypeScript strict, error handling. <span className="text-gray-500 text-sm block mt-1">→ Reduz alucinações em refatorações.</span>
          </li>
          <li className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <strong className="text-pink-400">data-model.md & file-structure.md:</strong> Entidades, validações Zod, mapa de pastas. <span className="text-gray-500 text-sm block mt-1">→ Fonte de verdade para campos e localização de arquivos.</span>
          </li>
        </ul>
      </div>
    ),
    pptx: {
      title: 'Além do CLAUDE.md: Docs de Contexto',
      bullets: [
        'Arquivos que transformam o Claude num dev que realmente conhece seu projeto:',
        'architecture.md: Diagramas, camadas, fluxos e decisões arquiteturais. Evita que o Claude proponha soluções que quebram a arquitetura.',
        'tech-stack.md: Versões exatas (React 19, Tailwind 4), libs proibidas. Economiza tokens e evita invenções de bibliotecas.',
        'coding-guidelines.md: Regras de estilo, TypeScript strict, error handling. Reduz alucinações em refatorações.',
        'data-model.md & file-structure.md: Entidades, validações Zod, mapa de pastas. Fonte de verdade para campos e localização de arquivos.'
      ]
    }
  },
  {
    id: '12-recursos',
    layout: 'table',
    title: 'Recursos do Claude Code',
    content: (
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
        <table className="w-full text-left text-lg">
          <thead className="bg-gray-800/50 text-gray-200">
            <tr>
              <th className="p-4 font-semibold">Recurso</th>
              <th className="p-4 font-semibold">O que faz</th>
              <th className="p-4 font-semibold">Quando usar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-gray-300">
            <tr>
              <td className="p-4 font-medium text-emerald-400">CLAUDE.md</td>
              <td className="p-4">Contexto persistente carregado a cada conversa</td>
              <td className="p-4">Convenções de projeto, regras "sempre faça X"</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-blue-400">Skill</td>
              <td className="p-4">Instruções e fluxos de trabalho sob demanda</td>
              <td className="p-4">Documentos de referência, tarefas repetíveis</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-purple-400">Subagent</td>
              <td className="p-4">Contexto de execução isolado</td>
              <td className="p-4">Tarefas paralelas, workers especializados</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-pink-400">Agent teams</td>
              <td className="p-4">Coordena múltiplas sessões independentes</td>
              <td className="p-4">Pesquisa paralela, revisores simultâneos</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-orange-400">MCP</td>
              <td className="p-4">Conecta a serviços externos</td>
              <td className="p-4">Consultar DBs, postar no Slack, etc.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-yellow-400">Hook</td>
              <td className="p-4">Script determinístico executado em eventos</td>
              <td className="p-4">Automação previsível (ex: ESLint após edição)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    pptx: {
      title: 'Recursos do Claude Code',
      table: [
        ['Recurso', 'O que faz', 'Quando usar'],
        ['CLAUDE.md', 'Contexto persistente carregado a cada conversa', 'Convenções de projeto, regras "sempre faça X"'],
        ['Skill', 'Instruções e fluxos de trabalho sob demanda', 'Documentos de referência, tarefas repetíveis'],
        ['Subagent', 'Contexto de execução isolado', 'Tarefas paralelas, workers especializados'],
        ['Agent teams', 'Coordena múltiplas sessões independentes', 'Pesquisa paralela, revisores simultâneos'],
        ['MCP', 'Conecta a serviços externos', 'Consultar DBs, postar no Slack, etc.'],
        ['Hook', 'Script determinístico executado em eventos', 'Automação previsível (ex: ESLint após edição)']
      ]
    }
  },
  {
    id: '13-plugins',
    layout: 'bullets',
    title: 'Plugins e Marketplace',
    content: (
      <div className="space-y-6 text-2xl text-gray-300">
        <p>
          Plugins permitem estender o Claude Code com funcionalidades personalizadas que podem ser compartilhadas entre projetos e equipes.
        </p>
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mt-6">
          <h4 className="text-white font-semibold mb-4 text-3xl">O Marketplace</h4>
          <ul className="list-disc pl-8 space-y-3">
            <li>Catálogo centralizado para distribuir plugins.</li>
            <li>Fornece rastreamento de versão e atualizações automáticas.</li>
            <li>Baseado em um arquivo <code className="text-emerald-400 text-xl">marketplace.json</code>.</li>
            <li>Pode ser hospedado no GitHub, GitLab ou caminhos locais.</li>
          </ul>
          <div className="mt-8 p-4 bg-black/50 rounded-lg border border-gray-800 font-mono text-emerald-400 text-xl">
            /plugin marketplace add &lt;url&gt;
          </div>
        </div>
      </div>
    ),
    pptx: {
      title: 'Plugins e Marketplace',
      bullets: [
        'Plugins permitem estender o Claude Code com funcionalidades personalizadas que podem ser compartilhadas entre projetos e equipes.',
        'O Marketplace:',
        '  - Catálogo centralizado para distribuir plugins.',
        '  - Fornece rastreamento de versão e atualizações automáticas.',
        '  - Baseado em um arquivo marketplace.json.',
        '  - Pode ser hospedado no GitHub, GitLab ou caminhos locais.',
        '/plugin marketplace add <url>'
      ]
    }
  }
];
