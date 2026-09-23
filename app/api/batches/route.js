export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      "https://nt.studybeepro.site/batches.json",
      {
        cache: "no-store",
      }
    );

    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") ||
          "application/json",
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
