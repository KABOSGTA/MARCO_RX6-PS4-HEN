const versions = [
"13.52","13.50","13.02","13.00","12.52","12.50","12.02","12.00",
"11.52","11.50","11.02","11.00","10.70","10.50","10.01","10.00",
"9.60","9.50","9.04","9.03","9.00"
].map(v=>({v, status:"تحقق من المصدر", note:`الإصدار ${v}: هذه الصفحة لا تؤكد توفر HEN أو GoldHEN لهذا الإصدار. راجع التوثيق الأصلي الحديث وتأكد من تطابق رقم النظام قبل الاعتماد على أي معلومات.`}));
let selected = "9.00";
const grid = document.getElementById("versionGrid");
const selectedVersion = document.getElementById("selectedVersion");
const versionMessage = document.getElementById("versionMessage");
function chooseVersion(v){
  selected=v;
  const item=versions.find(x=>x.v===v);
  selectedVersion.textContent=item.v;
  versionMessage.textContent=item.note;
  document.querySelectorAll(".version-card").forEach(btn=>btn.classList.toggle("active",btn.dataset.version===v));
}
versions.forEach(item=>{
 const btn=document.createElement("button");
 btn.type="button";btn.className="version-card";btn.dataset.version=item.v;
 btn.innerHTML=`<strong>${item.v}</strong><span><i class="dot"></i>${item.status}</span>`;
 btn.addEventListener("click",()=>chooseVersion(item.v));
 grid.appendChild(btn);
});
chooseVersion(selected);
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
