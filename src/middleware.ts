
import { type NextRequest, NextResponse, NextFetchEvent } from "next/server"
import { createEdgeRouter } from "next-connect";



const router = createEdgeRouter<NextRequest, NextFetchEvent>();



router.use(async (request, event, next) => {
  console.warn("middleware: ", request.nextUrl.pathname);
  return next();
});

router.use("/any", (request) => {
  return new NextResponse("ONE page-1 oooo")
});

router.all(() => {
  return NextResponse.next();
});

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  return router.run(request, event);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon).*)"
  ]
};
