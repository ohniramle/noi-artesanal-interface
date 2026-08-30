import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ClipboardList, Pizza, Users, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: 'Painel · NOI Artesanal' }, { name: 'description', content: 'Sistema de atendimento da NOI Artesanal.' }] }),
  component: Dashboard,
})

const cards = [
  { label: 'Pedidos hoje', value: '24', note: '+12% vs. ontem', icon: ClipboardList, href: '/app/pedidos' },
  { label: 'Clientes ativos', value: '186', note: '8 novos este mês', icon: Users, href: '/app/clientes' },
  { label: 'Pizzas cadastradas', value: '18', note: 'Cardápio atualizado', icon: Pizza, href: '/app/pizzas' },
  { label: 'Vendas no mês', value: 'R$ 8.420', note: '+18,4% no período', icon: TrendingUp, href: '/app/relatorios' },
]

function Dashboard() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6 lg:px-10">
        <div className="flex items-center gap-3"><img src="/assets/noi-logo.png" alt="NOI Artesanal" className="h-10 w-10 rounded object-cover" /><span className="font-serif text-xl font-semibold">NOI Artesanal</span></div>
        <Link to="/login" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">Sair</Link>
      </header>
      <div className="flex min-h-[calc(100dvh-4rem)]">
        <aside className="hidden w-64 shrink-0 flex-col bg-[#121212] p-5 text-[#fefefe] md:flex">
          <div className="mb-9"><p className="font-serif text-2xl">NOI</p><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFF45C]">artesanal</p></div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a7a7a7]">Operação</p>
          <nav className="space-y-1" aria-label="Navegação principal">
            <Link to="/" className="flex items-center gap-3 rounded-lg bg-[#FFF45C] px-3 py-3 text-sm font-bold text-[#121212]"><ClipboardList className="size-4" /> Visão geral</Link>
            <Link to="/app/pedidos" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#bdbdbd] transition hover:bg-[#2a2a2a] hover:text-[#fefefe]"><ClipboardList className="size-4" /> Pedidos</Link>
            <Link to="/app/clientes" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#bdbdbd] transition hover:bg-[#2a2a2a] hover:text-[#fefefe]"><Users className="size-4" /> Clientes</Link>
            <Link to="/app/pizzas" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#bdbdbd] transition hover:bg-[#2a2a2a] hover:text-[#fefefe]"><Pizza className="size-4" /> Pizzas</Link>
            <Link to="/app/relatorios" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#bdbdbd] transition hover:bg-[#2a2a2a] hover:text-[#fefefe]"><TrendingUp className="size-4" /> Relatórios</Link>
          </nav>
          <div className="mt-auto border-t border-[#3a3a3a] pt-4"><p className="text-xs text-[#bdbdbd]">Atendente conectado</p><p className="mt-1 text-sm font-semibold">Reinaldo</p></div>
        </aside>
        <main className="w-full p-6 lg:p-10">
          <div className="mx-auto max-w-6xl"><div className="mb-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Domingo, 30 de agosto</p><h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight">Bom trabalho, Reinaldo.</h1><p className="mt-2 text-muted-foreground">Acompanhe a operação da NOI Artesanal.</p></div>
            <section aria-label="Resumo da operação" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(({ label, value, note, icon: Icon, href }) => <Link key={label} to={href} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#121212] hover:shadow-md"><div className="flex items-start justify-between"><span className="text-sm text-muted-foreground">{label}</span><Icon className="size-5 text-[#121212]" aria-hidden="true" /></div><p className="mt-6 text-3xl font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{note}</p></Link>)}</section>
            <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]"><div className="rounded-xl border border-border bg-card p-6"><div className="flex items-center justify-between"><div><h2 className="font-serif text-2xl font-semibold">Pedidos recentes</h2><p className="mt-1 text-sm text-muted-foreground">Últimos pedidos registrados.</p></div><Link to="/app/pedidos" className="text-sm font-bold underline underline-offset-4">Ver todos</Link></div><div className="mt-6 divide-y divide-border">{[['#1048','Mariana Costa','R$ 86,00','Em preparo'],['#1047','João Mendes','R$ 52,00','A caminho'],['#1046','Ana Clara','R$ 118,00','Concluído']].map(([id, name, price, status]) => <div key={id} className="flex items-center justify-between py-4"><div><p className="font-medium">{name}</p><p className="font-mono text-xs text-muted-foreground">{id} · hoje, 19:2{ id.slice(-1) }</p></div><div className="text-right"><p className="font-semibold">{price}</p><span className="text-xs text-muted-foreground">{status}</span></div></div>)}</div></div><div className="rounded-xl bg-[#FFF45C] p-6 text-[#121212]"><p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Atalho rápido</p><h2 className="mt-4 font-serif text-3xl font-semibold leading-tight">Registrar um novo pedido</h2><p className="mt-3 text-sm leading-6">Cadastre o cliente, escolha as pizzas e envie o resumo para a cozinha.</p><Link to="/app/pedidos" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#121212] px-4 py-3 text-sm font-bold text-[#fefefe] transition hover:scale-[1.02]">Começar pedido <ArrowRight className="size-4" /></Link></div></section>
          </div>
        </main>
      </div>
    </div>
  )
}
