import { useEffect, useMemo, useState } from 'react'
import { Bell, BellRing, Building2, ChevronDown, Compass, Dumbbell, Heart, Home, LayoutDashboard, LocateFixed, Map, Menu, Search, Settings, SlidersHorizontal, Sparkles, UserRound, X } from 'lucide-react'
import MapView from './components/MapView'
import GymCard from './components/GymCard'
import GymDetails from './components/GymDetails'
import ManagerDashboard from './components/ManagerDashboard'
import OccupancyBadge from './components/OccupancyBadge'
import { activityFeed, gyms as initialGyms } from './data/gyms'

const navItems = [
  { id: 'explore', label: 'Explorar', icon: Compass },
  { id: 'favorites', label: 'Favoritas', icon: Heart },
  { id: 'alerts', label: 'Alertas', icon: BellRing },
  { id: 'profile', label: 'Perfil', icon: UserRound }
]

function Sidebar({ activePage, onNavigate, managerMode, setManagerMode }) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <img src="/gymflow-logo.png" alt="GymFlow" />
        <div><strong>GymFlow</strong><span>Treine no seu ritmo</span></div>
      </div>
      <nav>
        {navItems.map(item => {
          const Icon = item.icon
          return <button type="button" key={item.id} className={activePage === item.id && !managerMode ? 'active' : ''} onClick={() => { setManagerMode(false); onNavigate(item.id) }}><Icon size={20} /><span>{item.label}</span></button>
        })}
        <div className="nav-separator" />
        <button type="button" className={managerMode ? 'active business-nav' : 'business-nav'} onClick={() => setManagerMode(true)}><LayoutDashboard size={20} /><span>Área do gestor</span></button>
      </nav>
      <div className="sidebar-promo">
        <div className="promo-icon"><Sparkles /></div>
        <strong>GymFlow Pro</strong>
        <p>Previsões avançadas e alertas ilimitados.</p>
        <button type="button">Conhecer plano</button>
      </div>
      <button type="button" className="sidebar-settings"><Settings size={19} /> Configurações</button>
    </aside>
  )
}

function Header({ query, setQuery, mobileOpen, setMobileOpen }) {
  return (
    <header className="topbar">
      <button type="button" className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      <div className="global-search"><Search size={19} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar academia, bairro ou modalidade" /></div>
      <div className="topbar-actions">
        <button type="button" className="location-pill"><LocateFixed size={17} /> Aracaju, SE <ChevronDown size={15} /></button>
        <button type="button" className="notification-button"><Bell size={19} /><span /></button>
        <div className="user-chip"><div className="avatar">W</div><div><strong>Williams</strong><span>Plano gratuito</span></div><ChevronDown size={16} /></div>
      </div>
    </header>
  )
}

function ExplorePage({ gyms, favorites, onFavorite, onSelect, query, setQuery }) {
  const [view, setView] = useState('split')
  const [filter, setFilter] = useState('all')

  const filteredGyms = useMemo(() => {
    return gyms.filter(gym => {
      const matchesQuery = `${gym.name} ${gym.address} ${gym.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'all' || (filter === 'quiet' && gym.occupancy < 40) || (filter === 'rating' && gym.rating >= 4.8) || (filter === 'open' && true)
      return matchesQuery && matchesFilter
    }).sort((a, b) => filter === 'quiet' ? a.occupancy - b.occupancy : filter === 'rating' ? b.rating - a.rating : a.distance - b.distance)
  }, [gyms, query, filter])

  return (
    <div className="explore-page page-enter">
      <section className="welcome-banner">
        <div><span className="eyebrow">BOA NOITE, WILLIAMS</span><h1>Encontre o melhor momento para treinar.</h1><p>Veja a lotação das academias próximas em tempo real e evite horários de pico.</p></div>
        <div className="live-summary"><span className="live-dot" /> Dados atualizados agora<strong>{gyms.filter(g => g.occupancy < 40).length} academias tranquilas perto de você</strong></div>
      </section>

      <div className="mobile-search"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar academias" /></div>

      <section className="explore-toolbar">
        <div className="filter-chips">
          <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Todas</button>
          <button type="button" className={filter === 'quiet' ? 'active' : ''} onClick={() => setFilter('quiet')}><span className="chip-dot low" /> Tranquilas agora</button>
          <button type="button" className={filter === 'rating' ? 'active' : ''} onClick={() => setFilter('rating')}>Melhor avaliadas</button>
          <button type="button" className={filter === 'open' ? 'active' : ''} onClick={() => setFilter('open')}>Abertas agora</button>
          <button type="button"><SlidersHorizontal size={16} /> Filtros</button>
        </div>
        <div className="view-toggle">
          <button type="button" className={view === 'split' ? 'active' : ''} onClick={() => setView('split')}><Map size={17} /> Mapa</button>
          <button type="button" className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}><Dumbbell size={17} /> Lista</button>
        </div>
      </section>

      <section className={`explore-layout ${view === 'list' ? 'list-only' : ''}`}>
        {view === 'split' && <div className="map-panel"><MapView gyms={filteredGyms} onSelect={onSelect} /><div className="map-legend"><span><i className="legend-dot low" /> Tranquila</span><span><i className="legend-dot medium" /> Moderada</span><span><i className="legend-dot high" /> Cheia</span></div></div>}
        <div className="gym-list-panel">
          <div className="list-panel-heading"><div><h2>Academias próximas</h2><span>{filteredGyms.length} resultados encontrados</span></div><select><option>Mais próximas</option><option>Menos cheias</option><option>Melhor avaliadas</option></select></div>
          <div className="gym-list">
            {filteredGyms.map(gym => <GymCard key={gym.id} gym={gym} favorite={favorites.includes(gym.id)} onFavorite={onFavorite} onSelect={onSelect} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

function FavoritesPage({ gyms, favorites, onFavorite, onSelect }) {
  const favoriteGyms = gyms.filter(gym => favorites.includes(gym.id))
  return <div className="simple-page page-enter"><div className="page-title"><span className="eyebrow">SEUS LUGARES</span><h1>Academias favoritas</h1><p>Acompanhe rapidamente a lotação dos locais que você mais frequenta.</p></div><div className="cards-grid">{favoriteGyms.length ? favoriteGyms.map(gym => <GymCard key={gym.id} gym={gym} favorite onFavorite={onFavorite} onSelect={onSelect} />) : <EmptyState icon={Heart} title="Nenhuma favorita ainda" text="Salve academias para acompanhar a lotação com mais facilidade." />}</div></div>
}

function AlertsPage({ alerts, gyms, setAlerts }) {
  return <div className="simple-page page-enter"><div className="page-title"><span className="eyebrow">MONITORAMENTO</span><h1>Alertas personalizados</h1><p>Receba uma notificação quando a academia atingir o nível de movimento ideal para você.</p></div><div className="alerts-layout"><div className="alert-list">{alerts.map(alert => { const gym = gyms.find(item => item.id === alert.gymId); return <article className="alert-card" key={alert.id}><div className="alert-icon"><BellRing /></div><div><strong>{gym?.name}</strong><p>Avise quando a lotação estiver abaixo de <b>{alert.threshold}%</b>.</p><span>Ativo · Verificação a cada 5 minutos</span></div><label className="switch"><input type="checkbox" checked={alert.active} onChange={() => setAlerts(current => current.map(item => item.id === alert.id ? { ...item, active: !item.active } : item))} /><span /></label></article>})}</div><aside className="alerts-side-card"><div className="ai-orb large">AI</div><h2>Previsões mais inteligentes</h2><p>O GymFlow aprende seus horários preferidos e antecipa quando a academia ficará tranquila.</p><div className="mini-stat"><span>Tempo economizado este mês</span><strong>4h20</strong></div></aside></div></div>
}

function ProfilePage() {
  return <div className="simple-page page-enter"><div className="profile-cover"><div className="profile-avatar">W</div><div><h1>Williams Almeida</h1><p>Aracaju, Sergipe · Membro desde julho de 2026</p></div><button type="button" className="secondary-button">Editar perfil</button></div><div className="profile-stats"><article><strong>18</strong><span>Check-ins</span></article><article><strong>4h20</strong><span>Tempo economizado</span></article><article><strong>6</strong><span>Avaliações</span></article><article><strong>3</strong><span>Academias favoritas</span></article></div><div className="profile-grid"><section className="content-card"><div className="section-heading"><div><span className="eyebrow">SUA ROTINA</span><h2>Preferências de treino</h2></div></div><div className="preference-list"><div><span>Horário preferido</span><strong>20h às 22h</strong></div><div><span>Lotação máxima desejada</span><strong>Até 45%</strong></div><div><span>Modalidades favoritas</span><strong>Musculação e funcional</strong></div></div></section><section className="content-card"><div className="section-heading"><div><span className="eyebrow">ÚLTIMA SEMANA</span><h2>Seu resumo</h2></div></div><div className="week-bars">{[50, 80, 0, 68, 90, 35, 0].map((value, index) => <div key={index}><div><span style={{ height: `${value}%` }} /></div><small>{['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][index]}</small></div>)}</div></section></div></div>
}

function EmptyState({ icon: Icon, title, text }) {
  return <div className="empty-state"><div><Icon /></div><h2>{title}</h2><p>{text}</p></div>
}

export default function App() {
  const [activePage, setActivePage] = useState('explore')
  const [managerMode, setManagerMode] = useState(false)
  const [selectedGym, setSelectedGym] = useState(null)
  const [favorites, setFavorites] = useState([1, 3, 4])
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [gyms, setGyms] = useState(initialGyms)
  const [alerts, setAlerts] = useState([
    { id: 1, gymId: 1, threshold: 40, active: true },
    { id: 2, gymId: 3, threshold: 35, active: true }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setGyms(current => current.map(gym => {
        const change = Math.floor(Math.random() * 5) - 2
        const occupancy = Math.min(98, Math.max(12, gym.occupancy + change))
        return { ...gym, occupancy, currentPeople: Math.round((occupancy / 100) * gym.capacity) }
      }))
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!toast) return
    const timeout = setTimeout(() => setToast(''), 3200)
    return () => clearTimeout(timeout)
  }, [toast])

  const toggleFavorite = id => {
    setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
  }

  const createAlert = gym => {
    const exists = alerts.some(alert => alert.gymId === gym.id)
    if (!exists) setAlerts(current => [...current, { id: Date.now(), gymId: gym.id, threshold: 40, active: true }])
    setToast(exists ? 'Você já possui um alerta para esta academia.' : `Alerta criado para ${gym.shortName}.`)
  }

  const selectPage = page => {
    setActivePage(page)
    setSelectedGym(null)
    setMobileOpen(false)
  }

  const renderContent = () => {
    if (managerMode) return <ManagerDashboard />
    if (selectedGym) {
      const liveGym = gyms.find(gym => gym.id === selectedGym.id) || selectedGym
      return <GymDetails gym={liveGym} favorite={favorites.includes(liveGym.id)} onFavorite={toggleFavorite} onBack={() => setSelectedGym(null)} onCreateAlert={createAlert} />
    }
    if (activePage === 'favorites') return <FavoritesPage gyms={gyms} favorites={favorites} onFavorite={toggleFavorite} onSelect={setSelectedGym} />
    if (activePage === 'alerts') return <AlertsPage alerts={alerts} gyms={gyms} setAlerts={setAlerts} />
    if (activePage === 'profile') return <ProfilePage />
    return <ExplorePage gyms={gyms} favorites={favorites} onFavorite={toggleFavorite} onSelect={setSelectedGym} query={query} setQuery={setQuery} />
  }

  return (
    <div className="app-shell">
      <div className={`mobile-backdrop ${mobileOpen ? 'show' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={mobileOpen ? 'mobile-sidebar open' : 'mobile-sidebar'}><Sidebar activePage={activePage} onNavigate={selectPage} managerMode={managerMode} setManagerMode={value => { setManagerMode(value); setSelectedGym(null); setMobileOpen(false) }} /></div>
      <div className="desktop-sidebar"><Sidebar activePage={activePage} onNavigate={selectPage} managerMode={managerMode} setManagerMode={value => { setManagerMode(value); setSelectedGym(null) }} /></div>
      <div className="main-shell">
        <Header query={query} setQuery={setQuery} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main>{renderContent()}</main>
      </div>
      <nav className="bottom-nav">
        {navItems.map(item => { const Icon = item.icon; return <button type="button" key={item.id} className={activePage === item.id && !managerMode ? 'active' : ''} onClick={() => { setManagerMode(false); selectPage(item.id) }}><Icon size={21} /><span>{item.label}</span></button> })}
      </nav>
      {toast && <div className="toast"><BellRing size={18} /> {toast}</div>}
    </div>
  )
}
