async function getAdvice()
{

  const input = document.getElementById("problem").value;

  document.getElementById("result").innerHTML =
  "<span class='loading'>AI is thinking...</span>";

  try {

    const response = await fetch("http://localhost:3000/ai", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        input: input
      })

    });

    const data = await response.json();

    const result = data.choices[0].message.content;

    document.getElementById("result").innerText = result;

  } catch (error) {

    console.error(error);

    document.getElementById("result").innerText =
      "Error connecting to AI";

  }

}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}