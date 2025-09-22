
document.addEventListener("DOMContentLoaded", async () => {
    const displayPrice = document.getElementById("display-price");
    const changeValue = document.getElementById("change-value");
    const changePercentage = document.getElementById("change-percentage");
    const mainChart = document.getElementById("main-chart");
    const inputAmount = document.getElementById("input-amount");
    const outputAmount = document.getElementById("output-amount");
    const fromCurrencySelect = document.getElementById("from-currency");
    const toCurrencySelect = document.getElementById("to-currency");
    const timeRangeButtons = document.querySelectorAll(".time-range-button");

    let harshcoinData = [];
    const eurToUsdRate = 1.08; // Tasso di cambio fisso EUR a USD per simulazione

    // Carica i dati da harshcoin_market_data.csv
    async function loadHarshcoinData() {
        const response = await fetch("harshcoin_market_data.csv");
        const text = await response.text();
        const lines = text.split("\n").filter(line => line.trim() !== "");
        const headers = lines[0].split(",");
        harshcoinData = lines.slice(1).map(line => {
            const values = line.split(",");
            let obj = {};
            headers.forEach((header, i) => {
                obj[header] = (header === "Date") ? values[i] : parseFloat(values[i]);
            });
            return obj;
        });
        // Ordina i dati per data in ordine crescente
        harshcoinData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    }

    function formatNumber(num) {
        return num.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function updateDisplayStats() {
        if (harshcoinData.length === 0) return;

        const latestData = harshcoinData[harshcoinData.length - 1];
        const previousDayData = harshcoinData[harshcoinData.length - 2];

        const latestPriceUSD = latestData["Price (USD)"];
        const previousPriceUSD = previousDayData["Price (USD)"];

        const latestPriceEUR = latestPriceUSD / eurToUsdRate;
        const previousPriceEUR = previousPriceUSD / eurToUsdRate;

        const change = latestPriceEUR - previousPriceEUR;
        const percentageChange = (change / previousPriceEUR) * 100;

        displayPrice.textContent = formatNumber(latestPriceEUR);
        changeValue.textContent = (change >= 0 ? "+" : "") + formatNumber(change);
        changePercentage.textContent = `(${formatNumber(percentageChange)}%)`;

        if (change >= 0) {
            changeValue.style.color = "#81c995";
            changePercentage.style.color = "#81c995";
        } else {
            changeValue.style.color = "#f28b82"; // Rosso per diminuzione
            changePercentage.style.color = "#f28b82";
        }
    }

    function updateChartImage(range) {
        // In un'applicazione reale, qui si caricherebbero dati e si renderizzerebbe un grafico dinamico.
        // Per questo esempio, useremo sempre lo stesso grafico di prezzo.
        // Se avessimo grafici specifici per range, li caricheremmo qui.
        mainChart.src = "harshcoin_price_chart.png";
    }

    function convertCurrency() {
        const amount = parseFloat(inputAmount.value.replace(",", "."));
        if (isNaN(amount)) {
            outputAmount.value = "";
            return;
        }

        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        let result;
        const latestPriceUSD = harshcoinData[harshcoinData.length - 1]["Price (USD)"];

        if (fromCurrency === "HarshCoin" && toCurrency === "EUR") {
            result = (amount * latestPriceUSD) / eurToUsdRate;
        } else if (fromCurrency === "EUR" && toCurrency === "HarshCoin") {
            result = (amount * eurToUsdRate) / latestPriceUSD;
        } else {
            result = amount; // Stessa valuta o caso non gestito
        }
        outputAmount.value = formatNumber(result);
    }

    // Event Listeners
    timeRangeButtons.forEach(button => {
        button.addEventListener("click", () => {
            timeRangeButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            updateChartImage(button.dataset.range);
        });
    });

    inputAmount.addEventListener("input", convertCurrency);
    fromCurrencySelect.addEventListener("change", convertCurrency);
    toCurrencySelect.addEventListener("change", convertCurrency);

    // Inizializzazione
    await loadHarshcoinData();
    updateDisplayStats();
    updateChartImage("1G"); // Carica il grafico iniziale
    convertCurrency(); // Esegue la conversione iniziale
});


