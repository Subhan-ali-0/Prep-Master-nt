export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const url = new URL(
      "https://nt.studybeepro.site/api/nig"
    );

    url.searchParams.set("overview", id);

    const response = await fetch(url, {
      cache: "no-store",
    });

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
        error: "Failed to fetch batch overview",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
