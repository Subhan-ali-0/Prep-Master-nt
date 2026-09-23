export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const url = new URL("https://nt.studybeepro.site/api/nig");
    url.searchParams.set("overview", id);

    const r = await fetch(url, { cache: "no-store" });
    const text = await r.text();

    return new Response(text, {
      status: r.status,
      headers: {
        "Content-Type":
          r.headers.get("content-type") || "application/json",
      },
    });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to fetch overview",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
