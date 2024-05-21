const izzyPomOpinions = [
    "Ed:Yip.",
    "Stede:YEET!",
    "Frenchie:YIPYIPYIPYIPYIPYIP!",
    "Pete:Yeet.",
    "Lucius:Yip.",
    "The Swede:???",
    "Jim:Yip.",
    "Archie:Yip.",
    "Oluwande:Yip.",
    "Wee John:Yiiiip queen!",
    "Buttons:...",
    "Calico Jack:... ... ... ...yip.",
    "Roach:Yip."
  ];

  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const opinion of izzyPomOpinions) {
      const splitOpinion = opinion.split(":");
      if (splitOpinion[0].toLowerCase() === searchName) {
        para.textContent = `pom!Izzy! Is ${splitOpinion[0]} a yip or a yeet? "${splitOpinion[1]}"`;
        break;
      }
    }
    if (para.textContent === "") {
      para.textContent = "pom!Izzy needs correct input to register his opinions.";
    }
  });