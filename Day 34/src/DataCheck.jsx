function DataCheck() {
  const data = []

  return (
    <div>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <p>Data loaded</p>
      )}
    </div>
  )
}

export default DataCheck