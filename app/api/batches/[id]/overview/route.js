export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    const { id, folderId } = await params;

    const url = new URL(
      "https://nt.studybeepro.site/api/nig"
    );

    url.searchParams.set("content", id);
    url.searchParams.set("folder", folderId);

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
        error: "Failed to fetch folder content",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
