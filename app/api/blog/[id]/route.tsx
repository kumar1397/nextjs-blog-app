import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma";

export const GET = async (request: NextRequest) => {
  try {
    const id = request.url.split("/blog/")[1];
    // await prisma.$connect();
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    // await prisma.$disconnect();
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const id = request.url.split("/blog/")[1];
    // await prisma.$connect();
    const { title, description } = await request.json();
    const post = await prisma.post.update({
      data: { title, description },
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {

  }
};

export const DELETE = async (request: Request) => {
  try {
    const id = request.url.split("/blog/")[1];
    // await prisma.$connect();
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    // await prisma.$disconnect();
  }
};