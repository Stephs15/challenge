const testNumbers = (n) => RegExp(/^\d+(\.?)\d*$/).test(n)

const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals)

const fetchData = async (a, b) => {
    const fetchUrl = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${a}&symbols=${b}`,
    )
    return await fetchUrl.json()
}

export {testNumbers, round, fetchData}