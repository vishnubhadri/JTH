var __content = [
	{
		"var": "me={'tag':'label','text':document.getElementById('u').value}",
		"tag": "div",
		"class": "red",
		"cursor": "pointer",
		"child": [
			{
				"width": "100px",
				"height": "100px",
				"tag": "input",
				"type": "text",
				"id": "u",
				"value": "hello",
				"tabindex": "0",
				"lbl": { "pos": "L|R|T|B", "txt": "Username" }
			},
			{
				"tag": "input",
				"type": "password",
				"id": "p"
			},
			{
				"tag": "input",
				"type": "button",
				"value": "Button",
				"onclick": 'draw([ $me ],\'document.getElementById("page2").innerHTML\')'
			}
		],
	},
	{
		"tag": "input",
		"type": "text",
		"value": "Hello World!!!"
	},
	{
		"tag": "input",
		"type": "checkbox",
		"checked": "",
	},
	{
		"tag": "img",
		"src": "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
		"onclick": 'test("a")',
		"alt": "google.jpg"
	},
	{ "let": "me=letval", "tag": "label", 'code': '$me="hope working"', "text": "$me" },
	{
		"ctdn":
		{
			"if": { "1==1": [{ "tag": "label", "text": "test if" }] },
			"elif": { "1==2": [{ "tag": "label", "text": "test else if" }] },
			"else": [{ "tag": "label", "text": "test else" }]
		}
	},
	{
		"ctdn":
		{
			"switch": {
				"key": "2",
				"case": {
					"1": [{ "tag": "label", "text": "1" }],
					"2": [{ "tag": "label", "text": "2" }],
					"def": [{ "tag": "label", "text": "def" }]
				}
			}
		}
	},
	{ "tag": "input", "type": "text", 'code': '$me="great"', "value": "$me" },
	{
		"loop": {
			"for": {
				"tem": "$a<1",
				"var": "a=0",
				"code": "$a++",
				"stmt": [{ 'tag': 'br' }, { "tag": "label", "text": "I am loop representing $a " }],
			}
		}
	},
	{
		"loop": {
			"for": {
				"tem": "$b<3",
				"var": "b=1",
				"code": "$b++",
				"stmt": [{ 'tag': 'br' }, { "tag": "label", "text": "test \$ on loop count $b" }],
			}
		}
	},
	{ 'tag': 'br' },
	{
		"loop": {
			"do": {
				"$a<3": [{ 'tag': 'br', "code": "$a++", }, { "tag": "label", "text": "I am loop representing do while $a" }]
			}
		}
	},
	{
		"loop": {
			"while": {
				"$a<4": [{ 'tag': 'br', "code": "$a++", }, { "tag": "label", "text": "I am loop representing while  $a $a+1" }]
			}
		}
	},
	{ "template": "table" },
	{
		"tag": "input",
		"type": "range",
		"max": "100",
		"min": "0",
		"step": "25"
	},
	{
		'tag': 'br',
		"var": "hello=Hello World!!!"
	},
	{
		"loop": {
			"for": {
				"var": "b=0",
				"tem": "$b<hello.length",
				"code": "$b++",
				"stmt": [{ "tag": "label", "text": "$hello.charAt(b)" }],
			}
		},
		"tag": "label",
		"text": " From Loop"
	},
	{ "tag": "label","text": "<br>TEST $tet in text $" },
	{
		"tag": "div",
		"id": "variable",
		"child": [
			{
				"text": "Variables",
				"tag": "h2"
			},
			{
				"var":"_a=12",
				"tag": "p",
				/*DOLLOR SYMBLE NOT WORKING*/
				"text": "JTH uses variables that can use across the json as same as other programming language. It support both primitive and non-primitive variables." +
					"In JTH the variable can be define and access with $ symbol."
			},
			{
				"tag":"code",
				"text":"[{'code':'_a=10'},{'tag':'textarea','text':'\\$a'}]"
			}
		]
	}
]

var __templates =
{
	"table": [
		{
			"tag": "table",
			"child": [
				{ "tag": "thead", "child": [{ "tag": "th", "text": "1" }, { "tag": "th", "text": "2" }, { "tag": "th", "text": "3" }] },
				{ "tag": "tr", "child": [{ "tag": "td", "text": "1" }, { "tag": "td", "text": "1" }, { "tag": "td", "text": "1" }] },
				{ "tag": "tr", "child": [{ "tag": "td", "text": "2" }, { "tag": "td", "text": "2" }, { "tag": "td", "text": "2" }] },
			]
		}
	]
}

function test(a) { alert(a) };