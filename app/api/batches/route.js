export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      "https://nt.studybeepro.site/batches.json",
      {
        cache: "no-store",
      }
    );

    const text = await response.text();

    return Response.json({
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type"),
      preview: text.slice(0, 1000),
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
