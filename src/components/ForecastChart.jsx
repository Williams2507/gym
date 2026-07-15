export default function ForecastChart({ values, labels }) {
  return (
    <div className="forecast-chart" aria-label="Previsão de lotação por horário">
      {values.map((value, index) => (
        <div className="forecast-column" key={`${labels[index]}-${value}`}>
          <span className="forecast-value">{value}%</span>
          <div className="bar-track"><div className="bar-fill" style={{ height: `${Math.max(value, 8)}%` }} /></div>
          <span className="forecast-label">{labels[index]}</span>
        </div>
      ))}
    </div>
  )
}
