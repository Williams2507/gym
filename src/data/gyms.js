export const gyms = [
  {
    id: 1,
    name: 'Performance Jardins',
    shortName: 'Performance',
    latitude: -10.9472,
    longitude: -37.0552,
    distance: 1.2,
    rating: 4.8,
    reviews: 328,
    occupancy: 38,
    currentPeople: 46,
    capacity: 120,
    price: 'R$ 99,90/mês',
    openUntil: '23h',
    address: 'Av. Beira Mar, 1450 — Jardins',
    phone: '(79) 99999-1122',
    cover: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['Musculação', 'Funcional', 'Ar-condicionado', 'Estacionamento'],
    amenities: ['Musculação completa', 'Área funcional', 'Vestiários', 'Chuveiros', 'Estacionamento', 'Acessibilidade'],
    forecast: [62, 78, 88, 76, 55, 38, 24],
    forecastLabels: ['17h', '18h', '19h', '20h', '21h', '22h', '23h'],
    bestTime: '21h40 às 23h',
    comments: [
      { name: 'Mariana S.', rating: 5, verified: true, text: 'Equipamentos novos e ambiente muito organizado. Depois das 21h fica excelente.' },
      { name: 'Carlos R.', rating: 4, verified: true, text: 'Boa estrutura, mas entre 18h e 20h o peso livre costuma ficar cheio.' }
    ]
  },
  {
    id: 2,
    name: 'Viva Fitness 13 de Julho',
    shortName: 'Viva Fitness',
    latitude: -10.9299,
    longitude: -37.0488,
    distance: 2.4,
    rating: 4.6,
    reviews: 214,
    occupancy: 71,
    currentPeople: 92,
    capacity: 130,
    price: 'R$ 89,90/mês',
    openUntil: '00h',
    address: 'Av. 13 de Julho, 820 — 13 de Julho',
    phone: '(79) 99999-2233',
    cover: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['Musculação', 'Dança', '24h em dias úteis'],
    amenities: ['Musculação', 'Aulas coletivas', 'Vestiários', 'Bicicletário', 'Wi-Fi'],
    forecast: [69, 83, 91, 80, 63, 44, 28],
    forecastLabels: ['17h', '18h', '19h', '20h', '21h', '22h', '23h'],
    bestTime: '22h às 00h',
    comments: [
      { name: 'João V.', rating: 5, verified: true, text: 'Ótimos professores e boa variedade de aparelhos.' },
      { name: 'Ana P.', rating: 4, verified: false, text: 'Boa academia, mas o estacionamento é pequeno.' }
    ]
  },
  {
    id: 3,
    name: 'Arena Training Farolândia',
    shortName: 'Arena Training',
    latitude: -10.9777,
    longitude: -37.0634,
    distance: 3.1,
    rating: 4.9,
    reviews: 179,
    occupancy: 24,
    currentPeople: 29,
    capacity: 120,
    price: 'R$ 119,90/mês',
    openUntil: '22h30',
    address: 'Av. Murilo Dantas, 780 — Farolândia',
    phone: '(79) 99999-3344',
    cover: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['Cross training', 'Funcional', 'Personal'],
    amenities: ['Cross training', 'Área funcional', 'Personal trainer', 'Estacionamento', 'Armários'],
    forecast: [30, 52, 68, 61, 42, 24, 16],
    forecastLabels: ['17h', '18h', '19h', '20h', '21h', '22h', '23h'],
    bestTime: 'Agora ou após 21h30',
    comments: [
      { name: 'Lucas M.', rating: 5, verified: true, text: 'Equipe muito atenciosa e treino funcional excelente.' }
    ]
  },
  {
    id: 4,
    name: 'Fit Club Atalaia',
    shortName: 'Fit Club',
    latitude: -10.9847,
    longitude: -37.0458,
    distance: 5.7,
    rating: 4.5,
    reviews: 302,
    occupancy: 89,
    currentPeople: 142,
    capacity: 160,
    price: 'R$ 79,90/mês',
    openUntil: '23h',
    address: 'Av. Santos Dumont, 1100 — Atalaia',
    phone: '(79) 99999-4455',
    cover: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80'
    ],
    tags: ['Musculação', 'Spinning', 'Aulas coletivas'],
    amenities: ['Musculação', 'Spinning', 'Aulas coletivas', 'Vestiários', 'Loja fitness'],
    forecast: [84, 93, 96, 91, 76, 54, 34],
    forecastLabels: ['17h', '18h', '19h', '20h', '21h', '22h', '23h'],
    bestTime: 'Após 22h',
    comments: [
      { name: 'Bia T.', rating: 4, verified: true, text: 'Estrutura ótima, porém muito cheia no início da noite.' }
    ]
  }
]

export const activityFeed = [
  { title: 'Performance Jardins', text: 'Lotação caiu para 38%', time: 'Agora' },
  { title: 'Arena Training', text: 'Melhor janela prevista em 25 min', time: '5 min' },
  { title: 'Viva Fitness', text: 'Movimento deve cair após 21h', time: '12 min' }
]
