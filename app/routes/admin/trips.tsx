import Header from "components/Header"

const Trips = () => {
  return (
     <main className="all-users wrapper">
      <Header
        title={`Trips`}
        description="view and edit AI-generated travel plans."
        ctaText="Create A Trip"
        ctaUrl="/trips/create"
      />

      </main>
  )
}

export default Trips