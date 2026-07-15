import { ArrowLeft, BellRing, CheckCircle2, Clock3, Heart, MapPin, MessageSquare, Navigation, Phone, Share2, Star, Users } from 'lucide-react'
import OccupancyBadge from './OccupancyBadge'
import ForecastChart from './ForecastChart'

export default function GymDetails({ gym, favorite, onFavorite, onBack, onCreateAlert }) {
  return (
    <div className="details-page page-enter">
      <div className="details-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(4,18,38,.08), rgba(4,18,38,.9)), url(${gym.cover})` }}>
        <div className="details-toolbar">
          <button type="button" className="glass-button" onClick={onBack}><ArrowLeft size={20} /></button>
          <div>
            <button type="button" className="glass-button"><Share2 size={19} /></button>
            <button type="button" className={`glass-button ${favorite ? 'favorite-glass' : ''}`} onClick={() => onFavorite(gym.id)}>
              <Heart size={19} fill={favorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
        <div className="details-hero-content">
          <div className="verified-chip"><CheckCircle2 size={15} /> Unidade verificada</div>
          <h1>{gym.name}</h1>
          <div className="hero-meta">
            <span><Star size={17} fill="currentColor" /> {gym.rating} ({gym.reviews} avaliações)</span>
            <span><MapPin size={17} /> {gym.distance} km</span>
          </div>
        </div>
      </div>

      <div className="details-content">
        <section className="occupancy-feature-card">
          <div>
            <span className="eyebrow">MOVIMENTO AGORA</span>
            <div className="occupancy-main-number">{gym.occupancy}%</div>
            <OccupancyBadge value={gym.occupancy} />
          </div>
          <div className="capacity-ring" style={{ '--value': `${gym.occupancy * 3.6}deg` }}>
            <div><Users size={24} /><strong>{gym.currentPeople}</strong><span>de {gym.capacity}</span></div>
          </div>
        </section>

        <section className="content-card recommendation-card">
          <div className="section-heading compact-heading">
            <div><span className="eyebrow">RECOMENDAÇÃO INTELIGENTE</span><h2>Melhor horário para treinar</h2></div>
            <div className="ai-orb">AI</div>
          </div>
          <p>A previsão indica queda gradual do movimento. Sua melhor janela hoje é <strong>{gym.bestTime}</strong>.</p>
          <button type="button" className="primary-button" onClick={() => onCreateAlert(gym)}><BellRing size={18} /> Criar alerta de lotação</button>
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">PRÓXIMAS HORAS</span><h2>Previsão de movimento</h2></div><span className="updated-text">Atualizado agora</span></div>
          <ForecastChart values={gym.forecast} labels={gym.forecastLabels} />
          <div className="chart-legend"><span><i className="legend-dot low" /> Tranquila</span><span><i className="legend-dot medium" /> Moderada</span><span><i className="legend-dot high" /> Cheia</span></div>
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">CONHEÇA A UNIDADE</span><h2>Fotos da academia</h2></div></div>
          <div className="gallery-grid">
            {gym.gallery.map((image, index) => <img src={image} alt={`${gym.name} - foto ${index + 1}`} key={image} />)}
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">ESTRUTURA</span><h2>Comodidades</h2></div></div>
          <div className="amenities-grid">
            {gym.amenities.map(item => <div key={item}><CheckCircle2 size={18} /> {item}</div>)}
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">INFORMAÇÕES</span><h2>Localização e contato</h2></div></div>
          <div className="info-list">
            <div><MapPin size={20} /><span>{gym.address}</span></div>
            <div><Clock3 size={20} /><span>Aberta hoje até {gym.openUntil}</span></div>
            <div><Phone size={20} /><span>{gym.phone}</span></div>
          </div>
          <div className="action-grid">
            <button type="button" className="secondary-button"><Navigation size={18} /> Traçar rota</button>
            <button type="button" className="secondary-button"><Phone size={18} /> Ligar</button>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading"><div><span className="eyebrow">COMUNIDADE</span><h2>Avaliações recentes</h2></div><button type="button" className="text-button">Ver todas</button></div>
          <div className="review-list">
            {gym.comments.map((comment, index) => (
              <article className="review-card" key={`${comment.name}-${index}`}>
                <div className="avatar">{comment.name.charAt(0)}</div>
                <div>
                  <div className="review-header"><strong>{comment.name}</strong><span>{'★'.repeat(comment.rating)}</span></div>
                  {comment.verified && <div className="verified-review"><CheckCircle2 size={14} /> Visita verificada</div>}
                  <p>{comment.text}</p>
                </div>
              </article>
            ))}
          </div>
          <button type="button" className="secondary-button full-button"><MessageSquare size={18} /> Escrever avaliação</button>
        </section>
      </div>
    </div>
  )
}
