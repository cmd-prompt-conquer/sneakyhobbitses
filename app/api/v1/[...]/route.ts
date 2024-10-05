async function forwardToBackend(request: Request) {
  const url = request.url.replace(
    /(https?:\/\/.*\/api\/v1)(.*?)/g,
    `${process.env.API_URL}` + "$2",
  );
  const req = new Request(url, request);
  return await fetch(req);
}

export async function GET(request: Request) {
  return forwardToBackend(request);
}
export async function POST(request: Request) {
  return forwardToBackend(request);
}
export async function PUT(request: Request) {
  return forwardToBackend(request);
}
export async function PATCH(request: Request) {
  return forwardToBackend(request);
}
export async function DELETE(request: Request) {
  return forwardToBackend(request);
}
