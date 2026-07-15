import { ArrowDownRight, ArrowUpRight, BarChart3, Building2, Clock3, MessageSquare, TrendingUp, Users } from 'lucide-react'
import ForecastChart from './ForecastChart'

export default function ManagerDashboard() {
  return (
    <div className="manager-page page-enter">
      <div className="manager-header">
        <div><span className="eyebrow">GYMFLOW BUSINESS</span><h1>Painel da unidade</h1><p>Performance Jardins · Atualização em tempo real</p></div>
        <button type="button" className="primary-button"><Building2 size={18} /> Gerenciar unidade</button>
      </div>

      <div className="kpi-grid">
        <article className="kpi-card"><div className="kpi-icon"><Users /></div><span>Lotação atual</span><strong>38%</strong><small className="positive"><ArrowDownRight size={15} /> 12% abaixo da média</small></article>
        <article className="kpi-card"><div className="kpi-icon"><TrendingUp /></div><span>Entradas hoje</span><strong>624</strong><small className="positive"><ArrowUpRight size={15} /> 8,4% esta semana</small></article>
        <article className="kpi-card"><div className="kpi-icon"><Clock3 /></div><span>Permanência média</span><strong>1h18</strong><small>Últimos 30 dias</small></article>
        <article className="kpi-card"><div className="kpi-icon"><MessageSquare /></div><span>Avaliação média</span><strong>4,8</strong><small className="positive">+0,2 no mês</small></article>
      </div>

      <div className="dashboard-grid">
        <section className="content-card dashboard-span-2">
          <div className="section-heading"><div><span className="eyebrow">FLUXO DE HOJE</span><h2>Ocupação ao longo do dia</h2></div><select><option>Hoje</option><option>7 dias</option><option>30 dias</option></select></div>
          <ForecastChart values={[18, 24, 31, 44, 59, 82, 91, 76, 54, 38]} labels={['6h', '8h', '10h', '12h', '15h', '18h', '19h', '20h', '21h', '22h']} />
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">AGORA</span><h2>Áreas da academia</h2></div></div>
          <div className="zone-list">
            {[['Peso livre', 76], ['Cardio', 42], ['Funcional', 28], ['Vestiários', 33]].map(([name, value]) => (
              <div key={name}><div><span>{name}</span><strong>{value}%</strong></div><div className="progress-track"><div style={{ width: `${value}%` }} /></div></div>
            ))}
          </div>
        </section>

        <section className="content-card dashboard-span-2">
          <div className="section-heading"><div><span className="eyebrow">INTELIGÊNCIA</span><h2>Oportunidades identificadas</h2></div><BarChart3 /></div>
          <div className="insight-grid">
            <article><span>HORÁRIO OCIOSO</span><strong>14h às 16h</strong><p>Crie uma campanha para aumentar o fluxo neste período.</p><button type="button" className="text-button">Criar campanha</button></article>
            <article><span>PICO RECORRENTE</span><strong>18h40 às 20h10</strong><p>Reforce a equipe e monitore a área de peso livre.</p><button type="button" className="text-button">Ver detalhes</button></article>
            <article><span>SATISFAÇÃO</span><strong>Limpeza +12%</strong><p>As menções positivas cresceram após o novo protocolo.</p><button type="button" className="text-button">Ver avaliações</button></article>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">ALERTAS</span><h2>Atenção necessária</h2></div></div>
          <div className="manager-alert-list">
            <div><span className="alert-dot warning" /><p><strong>Peso livre acima de 75%</strong><small>Há 8 minutos</small></p></div>
            <div><span className="alert-dot neutral" /><p><strong>3 novas avaliações</strong><small>Hoje</small></p></div>
            <div><span className="alert-dot success" /><p><strong>Fluxo abaixo do previsto</strong><small>Agora</small></p></div>
          </div>
        </section>
      </div>
    </div>
  )
}
