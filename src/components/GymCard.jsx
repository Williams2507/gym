import { Clock3, Heart, MapPin, Star } from 'lucide-react'
import OccupancyBadge from './OccupancyBadge'

export default function GymCard({ gym, favorite, onFavorite, onSelect }) {
  return (
    <article className="gym-card" onClick={() => onSelect(gym)}>
      <div className="gym-card-image">
        <img src={gym.cover} alt={gym.name} />
        <button
          type="button"
          className={`icon-button floating ${favorite ? 'active' : ''}`}
          aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          onClick={(event) => {
            event.stopPropagation()
            onFavorite(gym.id)
          }}
        >
          <Heart size={19} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="gym-card-body">
        <div className="gym-card-heading">
          <div>
            <h3>{gym.name}</h3>
            <div className="rating-line"><Star size={16} fill="currentColor" /> {gym.rating} <span>({gym.reviews})</span></div>
          </div>
          <OccupancyBadge value={gym.occupancy} compact />
        </div>
        <div className="gym-card-meta">
          <span><MapPin size={15} /> {gym.distance} km</span>
          <span><Clock3 size={15} /> Aberta até {gym.openUntil}</span>
        </div>
        <div className="tag-row">
          {gym.tags.slice(0, 3).map(tag => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <div className="gym-card-footer">
          <span><strong>{gym.price}</strong></span>
          <button type="button" className="text-button">Ver detalhes</button>
        </div>
      </div>
    </article>
  )
}
