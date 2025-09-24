import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Static data for demonstration
const staticUserStats = {
  getUserStats: {
    currentRank: 'Space-Tether Commander',
    totalStars: 1250,
    totalZaps: 850,
    totalMissions: 45,
    totalCourses: 12,
    userBobbleheads: [
      {
        id: 1,
        bobbleName: 'Commander Bobble',
        imageSrc: '/images/bobbleheads/commander-bobble.png'
      },
      {
        id: 2,
        bobbleName: 'Space Explorer',
        imageSrc: '/images/bobbleheads/space-explorer.png'
      }
    ],
    userAchievements: [
      {
        id: 1,
        name: 'First Mission',
        image: 'achievements/first-mission.png',
        isAssign: true
      },
      {
        id: 2,
        name: 'Star Collector',
        image: 'achievements/star-collector.png',
        isAssign: true
      },
      {
        id: 3,
        name: 'Course Master',
        image: 'achievements/course-master.png',
        isAssign: true
      },
      {
        id: 4,
        name: 'Zap Expert',
        image: 'achievements/zap-expert.png',
        isAssign: true
      },
      {
        id: 5,
        name: 'Space Pioneer',
        image: 'achievements/space-pioneer.png',
        isAssign: true
      },
      {
        id: 6,
        name: 'Mission Veteran',
        image: 'achievements/mission-veteran.png',
        isAssign: true
      }
    ]
  }
}

// Simple ranks data
const S2_RANKS = [
  {
    rankName: 'Space-Tether Commander',
    imageSrc: 'https://via.placeholder.com/84x84/43bcff/ffffff?text=CMD'
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('user_id') || ''
  
  // Use static data instead of API call
  const userStatsData = staticUserStats

  const userRank = S2_RANKS.find((rank) => rank.rankName === userStatsData?.getUserStats?.currentRank)

  const userBobbleheads = userStatsData?.getUserStats?.userBobbleheads

  const achievementsArray = Array.isArray(userStatsData?.getUserStats?.userAchievements)
    ? userStatsData?.getUserStats?.userAchievements
    : []
  const assigned = achievementsArray.filter((ach: any) => ach.isAssign)
  const maxDisplay = 5
  const displayed = assigned.slice(0, maxDisplay)
  const remainingCount = Math.max(assigned.length - maxDisplay, 0)

  const finalDisplay = displayed

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src={userRank?.imageSrc}
              alt={userStatsData?.getUserStats?.currentRank ?? 'No Rank'}
              width={84}
              height={84}
              style={{ borderRadius: '8px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#43bcff', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                RANK
              </div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                {userStatsData?.getUserStats?.currentRank ?? 'Space-Tether Trainee'}
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '30px', fontSize: '16px', fontWeight: 'bold' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EEBB05' }}>
              <span>⭐</span>
              <span>{userStatsData?.getUserStats?.totalStars ?? 0}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#43bcff' }}>
              <span>⚡</span>
              <span>{userStatsData?.getUserStats?.totalZaps ?? 0}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C6D5E8' }}>
              <span style={{ color: '#dd1438' }}>{userStatsData?.getUserStats?.totalMissions ?? '0'}</span>
              <span>Missions</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C6D5E8' }}>
              <span style={{ color: '#dd1438' }}>{userStatsData?.getUserStats?.totalCourses ?? '0'}</span>
              <span>Courses</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <div style={{ color: '#C6D5E8', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Achievements
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {finalDisplay.map((ach: any) => (
                <div
                  key={ach.id}
                  style={{
                    width: '30px',
                    height: '44px',
                    border: '1px solid #334966',
                    borderRadius: '4px',
                    backgroundColor: '#334966',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '8px',
                    textAlign: 'center',
                    color: 'white',
                    textTransform: 'uppercase',
                    padding: '2px',
                  }}
                >
                  {ach?.name}
                </div>
              ))}
              <div style={{
                width: '32px',
                height: '44px',
                backgroundColor: '#334966',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#C6D5E8',
                border: '1px solid #334966',
              }}>
                +{remainingCount}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            {userBobbleheads?.map((bobblehead: any) => (
              <div
                key={bobblehead.id}
                style={{
                  width: '87px',
                  height: '130px',
                  backgroundColor: '#334966',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {bobblehead.bobbleName}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
