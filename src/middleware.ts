
import { NextRequest, NextResponse, NextFetchEvent } from "next/server"
import { createEdgeRouter } from "next-connect";



const router = createEdgeRouter<NextRequest, NextFetchEvent>();



router.use(async (req, event, next) => {
  //added in remote by a team
console.warn("middleware ", req.nextUrl.pathname);
  return next();
});

router.use("/any", (req) => {
  return new NextResponse("ONE page-2 teamo oooo")
});

router.all(() => {
  return NextResponse.next();
});

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  return router.run(req, event);
}



export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon).*)"
  ]
};
