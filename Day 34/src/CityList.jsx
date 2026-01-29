function CityList() {
  const cities = ["Chennai", "Madurai", "Coimbatore", "Trichy", "Thirunelveli"]

  return (
    <ul>
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  )
}

export default CityList