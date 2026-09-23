export const dynamic='force-dynamic';
export async function GET(req,{params}){
 const {lectureId}=await params; const q=new URL(req.url).searchParams;
 const upstream=process.env.PLAYBACK_API_URL;
 if(!upstream)return Response.json({error:'PLAYBACK_API_URL is not configured.'},{status:501});
 const u=new URL(upstream);u.searchParams.set('content_id',q.get('content_id')||lectureId);if(q.get('course_id'))u.searchParams.set('course_id',q.get('course_id'));if(q.get('vdc_id'))u.searchParams.set('vdc_id',q.get('vdc_id'));
 const r=await fetch(u,{cache:'no-store',headers:{Accept:'application/json',...(process.env.UPSTREAM_API_KEY?{'Authorization':`Bearer ${process.env.UPSTREAM_API_KEY}`}:{})}});const body=await r.text();return new Response(body,{status:r.status,headers:{'content-type':r.headers.get('content-type')||'application/json'}})
}
