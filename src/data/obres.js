// Llista fictícia d'obres d'art utilitzada com a dades de prova (mock data)
// Cada obra conté:
// - id: identificador únic
// - titol: nom de l’obra
// - artista: nom de l’autor/a
// - likes: nombre de "m'agrada" rebuts
// - views: nombre de visualitzacions

const obres = [
  { id: 1, titol: 'Obra1', artista: 'ARTS1', likes: 10, views: 20 },
  { id: 2, titol: 'Obra2', artista: 'ARTS2', likes: 12, views: 20 },
  { id: 3, titol: 'Obra3', artista: 'ARTS3', likes: 8, views: 15 },
  { id: 4, titol: 'Obra4', artista: 'ARTS4', likes: 25, views: 30 },
  { id: 5, titol: 'Obra5', artista: 'ARTS5', likes: 9, views: 13 },
  { id: 6, titol: 'Obra6', artista: 'ARTS6', likes: 17, views: 21 },
  { id: 7, titol: 'Obra7', artista: 'ARTS7', likes: 11, views: 10 },
  { id: 8, titol: 'Obra8', artista: 'ARTS8', likes: 14, views: 16 },
]

// Exportació de la llista per poder utilitzar-la en altres components (ex: galeries)
export default obres