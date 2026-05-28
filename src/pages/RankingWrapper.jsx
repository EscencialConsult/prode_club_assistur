import RankingPage     from '../dashboard/RankingPage.jsx'
import RankingPageUser from './RankingPageUser.jsx'
import { useAuth }     from '../hooks/useAuth.jsx'

export default function RankingWrapper() {
  const { user, loading, isAdmin } = useAuth()

  if (loading) return <div>Cargando...</div>

  return isAdmin ? <RankingPage /> : <RankingPageUser />
}