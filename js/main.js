// Little Britan Quote Generater

var quotes = [
	{text:"'Yeah, I know.'' - Andy", img: "img/andy3.jpg"},
	{text:"'I don't like it!' - Andy", img: "img/andy3.jpg"},
	{text:"'I want that one!' - Andy", img: "img/andy.jpg"},
	{text:"'Computer says no.' (*coughs*) - Carol Beer", img: "img/carol.jpg"},
	{text:"'Eh Eh Ehhh!' - Anne", img: "img/anne.jpg"},
	{text:"'Dust... anybody? No?' - Marjorie Dawes", img: "img/marj.jpg"},
	{text:"'Hello Fatties!' - Marjorie Dawes", img: "img/marj2.jpg"},
	{text:"'I JUST LOVE CAKE!' - Marjorie Dawes", img: "img/marj2.jpg"},
	{text:"'No but, yeah but' (reapeated) - Vicky Pollard", img: "img/vicky.jpg"},
	{text:"'Oh my God, I just SO can't believe you just said that!' - Vicky Pollard", img: "img/vicky.jpg"},
	{text:"'Shut up!' - Vicky Pollard", img: "img/vicky.jpg"},
	{text:"'Oh my God! Just because I have sex with someone doesn't mean I fancy 'em' - Vicky Pollard", img: "img/vicky2.jpg"},
	{text:"'I'm a lady!' - Emily Howard", img: "img/emily.jpg"},
	{text:"'I do ladies things!' - Emily Howard", img: "img/emily2.jpg"},
	{text:"'Hello, darling!' - Bubbles DeVere", img: "img/bubbles.jpg"},
	{text:"'Call me Bubbles darling, everybody does!' - Bubbles DeVere", img: "img/bubbles2.jpg"},
	{text:"'I'm the only gay in the village!' - Daffyd Thomas", img: "img/daffyd.jpg"}
]

//Generate Random Quote

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length)); //counts how many strings there are and calculates it according to that
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber].text; //targets the text
	document.getElementById("imagedisplay").src = quotes[randomNumber].img; //targets the image
}