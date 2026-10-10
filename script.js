const versions = [
  {v:"13.52", note:"تحقق من مرجع موثوق وحديث قبل تجربة أي طريقة. لا يوجد تفعيل تلقائي من هذه الصفحة.", status:"يلزم التحقق"},
  {v:"13.00", note:"التوافق يعتمد على الطريقة المحددة ومعلوماتها الموثوقة؛ لا تفترض دعم الإصدار تلقائيًا.", status:"يلزم التحقق"},
  {v:"12.50", note:"تحقق من رقم الإصدار الدقيق ومن المصدر قبل استخدام أي ملفات خارجية.", status:"يلزم التحقق"},
  {v:"12.00", note:"هذه الصفحة لا تنفذ استغلالًا. راجع توثيقًا موثوقًا خاصًا بإصدار جهازك.", status:"يلزم التحقق"},
  {v:"11.50", note:"قد تختلف القيود حسب إصدار النظام وطريقة التفعيل. لا توجد عملية تفعيل في الموقع.", status:"يلزم التحقق"},
  {v:"11.00", note:"تأكد من توافق الطريقة مع إصدار النظام الكامل قبل المتابعة.", status:"يلزم التحقق"},
  {v:"10.01", note:"استخدم معلومات توافق موثقة ومخصصة لهذا الإصدار؛ الزر هنا يعرض المعلومات فقط.", status:"يلزم التحقق"},
  {v:"9.60", note:"تختلف الطرق المتاحة حسب الإصدار. تحقق من مرجع موثوق قبل اتخاذ أي خطوة.", status:"يلزم التحقق"},
  {v:"9.50", note:"لا يعني ظهور الإصدار في القائمة أنه مدعوم. تحقق من التوافق أولًا.", status:"يلزم التحقق"},
  {v:"9.00", note:"يوجد توثيق عام معروف لطرق مرتبطة بهذا الإصدار، لكن يجب اتباع مصدر موثوق والتحقق من التفاصيل الحالية.", status:"تحقق من المصدر"}
];
let selected = "9.00";
const grid = document.getElementById("versionGrid");
const selectedVersion = document.getElementById("selectedVersion");
const versionMessage = document.getElementById("versionMessage");
const statusPill = document.getElementById("statusPill");
function chooseVersion(v){
  selected = v;
  const item = versions.find(x=>x.v===v);
  selectedVersion.textContent = item.v;
  versionMessage.textContent = item.note;
  statusPill.innerHTML = "<span></span> " + item.status;
  document.querySelectorAll(".version-card").forEach(btn=>btn.classList.toggle("active",btn.dataset.version===v));
}
versions.forEach(item=>{
  const btn=document.createElement("button");
  btn.className="version-card";
  btn.dataset.version=item.v;
  btn.innerHTML=`<strong>${item.v}</strong><span><i class="dot known"></i>${item.status}</span>`;
  btn.addEventListener("click",()=>chooseVersion(item.v));
  grid.appendChild(btn);
});
chooseVersion(selected);
document.getElementById("showGuide").addEventListener("click",()=>document.getElementById("guide").scrollIntoView({behavior:"smooth"}));
document.getElementById("menuBtn").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));
