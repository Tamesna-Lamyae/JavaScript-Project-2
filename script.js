function evaluateCode() {
    const code = document.getElementById("codeInput").value;
    let output;

    try {
        output = eval(code);
        document.getElementById("output").innerText = `Résultat:\n${output}`;
    } catch (error) {
        document.getElementById("output").innerText = `Erreur:\n${error.message}`;
    }
}
