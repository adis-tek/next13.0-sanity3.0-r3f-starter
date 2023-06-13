import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  return NextResponse.json([
    {
      _id: "58a3c5f8-7b9a-48d8-8c42-34b4fd720f65",
      title: "Snow's At The Top",
      slug: { _type: "slug", current: "snow-s-at-the-top" },
      imageUrl:
        "https://cdn.sanity.io/images/9cfrs3t0/production/60c51830a1a759f6a19136548fed897995c4f7bb-1920x1080.jpg",
      body: null,
      alt: null,
      videoUrl: "https://player.vimeo.com/video/501719570",
    },
    {
      _id: "90cde50c-b750-432e-9510-b19f45c19ccc",
      title: "Mountains Are Tall",
      slug: { _type: "slug", current: "mountains-are-tall" },
      imageUrl:
        "https://cdn.sanity.io/images/9cfrs3t0/production/60c51830a1a759f6a19136548fed897995c4f7bb-1920x1080.jpg",
      body: [
        {
          _key: "260e8bc8c9f1",
          markDefs: [],
          children: [
            {
              _type: "span",
              marks: [],
              text: "Patrick likes Mr.Panda.",
              _key: "99c17c6ada02",
            },
          ],
          _type: "block",
          style: "normal",
        },
      ],
      alt: null,
      videoUrl: "https://player.vimeo.com/video/783453158",
    },
    {
      body: null,
      alt: null,
      videoUrl: "https://player.vimeo.com/video/9526362",
      _id: "e17637cc-3cc7-43ea-825f-2ac0bc31ac43",
      title: "Snowboards Are Cool",
      slug: { current: "snowboards-are-cool", _type: "slug" },
      imageUrl:
        "https://cdn.sanity.io/images/9cfrs3t0/production/60c51830a1a759f6a19136548fed897995c4f7bb-1920x1080.jpg",
    },
  ]);
}
