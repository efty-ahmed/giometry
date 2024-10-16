//-----Get triangle Base vallue--->
function calculateTriangleArea(){
    const triangleBaseInpute = document.getElementById('triangle_base');
    const triangleBaseText = triangleBaseInpute.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);


//------Get triangle hight value--->
const triangleHighhtInpute = document.getElementById('triangle_hight');
const triangleHightText = triangleHighhtInpute.value;
const hight = parseFloat(triangleHightText);

console.log(hight);

//Calculate triangle area--->
const area = 0.5 * base * hight;
console.log('Area of the Triangle is:', area);

//display triangle area

const triangleAreaSpan = document.getElementById('triangle_area');
triangleAreaSpan.innerText = area;








}


