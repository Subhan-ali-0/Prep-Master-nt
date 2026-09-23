export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const r = await fetch(
      "https://nt.studybeepro.site/batches.json",
      { cache: "no-store" }
    );

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
        error: "Failed to fetch batches",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
