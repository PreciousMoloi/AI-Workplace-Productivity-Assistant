const views = [...document.querySelectorAll(".view")];
const navItems = [...document.querySelectorAll(".nav-item")];
const pageTitle = document.getElementById("pageTitle");
const titles = {
  dashboard:"Good afternoon, Professional", email:"Smart Email Generator",
  meeting:"Meeting Notes Summarizer", tasks:"AI Task Planner",
  research:"AI Research Assistant", chat:"AI Workplace Chatbot", about:"Responsible AI & Prompt Strategy"
};

function showView(name){
  views.forEach(v=>v.classList.toggle("active",v.id==="view-"+name));
  navItems.forEach(n=>n.classList.toggle("active",n.dataset.view===name));
  pageTitle.textContent=titles[name]||titles.dashboard;
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
  const target=e.target.closest("[data-view]");
  if(target){showView(target.dataset.view);}
});
document.getElementById("mobileMenu").onclick=()=>document.getElementById("sidebar").classList.toggle("open");

function wait(id, buttonId, work){
  const loading=document.getElementById(id), btn=document.getElementById(buttonId);
  loading.style.display="block"; btn.disabled=true; btn.style.opacity=".65";
  setTimeout(()=>{loading.style.display="none";btn.disabled=false;btn.style.opacity="1";work()},650);
}
function render(id,html){document.getElementById(id).innerHTML=`<div class="generated">${html}</div>`;}

document.getElementById("generateEmail").onclick=()=>{
  const audience=document.getElementById("emailAudience").value,tone=document.getElementById("emailTone").value;
  const context=document.getElementById("emailContext").value.trim()||"a workplace matter that requires a clear and professional response";
  const points=document.getElementById("emailPoints").value.trim()||"the relevant next steps and a clear request";
  wait("emailLoading","generateEmail",()=>{
    render("emailOutput",`<h4>Subject: Follow-up regarding ${context.slice(0,55)}${context.length>55?"…":""}</h4>
    <p>Dear ${audience==="Client"?"Client":audience},</p>
    <p>I hope you are well.</p>
    <p>I am writing regarding ${context}. I would like to provide a concise update and request your consideration on the matter.</p>
    <div class="callout"><b>Key points:</b> ${points}</div>
    <p>Thank you for your time and consideration. Please let me know if you require any further information.</p>
    <p>Kind regards,<br><b>Professional</b></p>
    <span class="tag">${tone} tone</span><span class="tag">${audience} audience</span>`);
  });
};

document.getElementById("generateMeeting").onclick=()=>{
  const text=document.getElementById("meetingInput").value.trim()||"Project team discussed progress, testing, documentation and next steps. The team agreed that testing should be completed before final submission and that the project lead will coordinate the outstanding actions.";
  wait("meetingLoading","generateMeeting",()=>{
    render("meetingOutput",`<h4>Executive Meeting Summary</h4>
    <p><b>Overview:</b> The meeting focused on project progress, outstanding work and readiness for delivery.</p>
    <p><b>Key points</b></p><ul><li>Current progress and outstanding deliverables were reviewed.</li><li>Testing and quality checks remain important before final submission.</li><li>Documentation should be kept aligned with the final product.</li></ul>
    <p><b>Decisions</b></p><ul><li>Complete validation before treating the project as final.</li><li>Coordinate outstanding work through the project lead.</li></ul>
    <p><b>Action items</b></p><ul><li>Project team — complete testing and validation.</li><li>Project lead — coordinate outstanding tasks.</li><li>Team — update documentation before submission.</li></ul>
    <span class="tag">${document.getElementById("meetingStyle").value}</span>`);
  });
};

document.getElementById("generateTasks").onclick=()=>{
  const raw=document.getElementById("tasksInput").value.trim()||"Finish project documentation - due today\nTest application - due tomorrow\nPrepare presentation - due Friday\nReview GitHub README - low urgency";
  const lines=raw.split(/\n+/).map(x=>x.trim()).filter(Boolean);
  wait("tasksLoading","generateTasks",()=>{
    const list=lines.slice(0,6).map((x,i)=>`<li><b>${i<2?"HIGH":"MEDIUM"}</b> — ${x}</li>`).join("");
    render("tasksOutput",`<h4>Recommended work plan</h4><p><b>Priority logic:</b> Address deadlines and high-impact deliverables first, then complete supporting work.</p><ul>${list}</ul>
    <p><b>Suggested sequence</b></p><div class="callout"><b>Focus block 1:</b> Highest-urgency deliverable<br><b>Focus block 2:</b> Testing / quality assurance<br><b>Focus block 3:</b> Documentation and communication<br><b>Buffer:</b> Reserve time for unexpected issues.</div>
    <p><b>Optimization tip:</b> Work in focused blocks and batch low-complexity administrative tasks together.</p>`);
  });
};

document.getElementById("generateResearch").onclick=()=>{
  const topic=document.getElementById("researchInput").value.trim()||"generative AI for workplace productivity";
  const audience=document.getElementById("researchAudience").value,depth=document.getElementById("researchDepth").value;
  wait("researchLoading","generateResearch",()=>{
    render("researchOutput",`<h4>Research Brief: ${topic}</h4>
    <p><span class="tag">${audience}</span><span class="tag">${depth}</span></p>
    <p><b>Executive insight:</b> AI can create value when it is applied to repetitive information tasks with clear instructions, appropriate context and a human validation step.</p>
    <p><b>Key insights</b></p><ul><li>Structured prompts improve consistency by defining the role, task, context and output constraints.</li><li>Automation is most useful where work is repetitive but still benefits from human oversight.</li><li>Responsible use requires checking factual accuracy, bias, privacy and suitability.</li></ul>
    <p><b>Practical recommendations</b></p><ul><li>Start with low-risk, high-volume tasks such as drafting and summarization.</li><li>Create reusable prompt templates for common workflows.</li><li>Keep a human reviewer responsible for final outputs.</li></ul>
    <div class="callout"><b>Important:</b> This prototype provides synthesized guidance rather than verified source citations. For formal research, validate claims against authoritative sources.</div>`);
  });
};

function addChat(text,user=false){
  const box=document.getElementById("chatMessages"), div=document.createElement("div");
  div.className="message "+(user?"user":"ai");
  div.innerHTML=`<div class="chat-avatar">${user?"P":"AI"}</div><div><span class="msg-label">${user?"You":"Workplace AI"}</span><p>${escapeHtml(text)}</p></div>`;
  box.appendChild(div);box.scrollTop=box.scrollHeight;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function botReply(q){
  const l=q.toLowerCase();
  if(l.includes("priorit")||l.includes("day")) return "Start with the task that is both urgent and important. Then schedule a focused block for the highest-impact deliverable, followed by testing or quality checks. Keep a short buffer for unexpected issues.";
  if(l.includes("email")||l.includes("follow-up")) return "I recommend a concise structure: clear subject, context, specific request, next step and professional closing. Use the Email Generator for a tailored draft.";
  if(l.includes("agenda")||l.includes("meeting")) return "A concise agenda can be: 1) objectives, 2) progress updates, 3) blockers, 4) decisions required, 5) action items and owners, 6) deadlines.";
  return "I can help you with workplace emails, meeting summaries, task planning and research. For best results, provide the goal, context, audience and any constraints.";
}
document.getElementById("sendChat").onclick=()=>{
  const input=document.getElementById("chatInput"),q=input.value.trim();if(!q)return;
  addChat(q,true);input.value="";
  setTimeout(()=>addChat(botReply(q)),450);
};
document.getElementById("chatInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();document.getElementById("sendChat").click();}});
document.querySelectorAll("[data-chat]").forEach(b=>b.onclick=()=>{document.getElementById("chatInput").value=b.dataset.chat;document.getElementById("sendChat").click();});
document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{
  const el=document.getElementById(b.dataset.copy);
  await navigator.clipboard.writeText(el.innerText);
  const toast=document.getElementById("toast");toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1400);
});
