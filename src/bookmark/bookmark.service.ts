import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  createBookmark(userId: number, dto: BookmarkDto) {
    const bookmark = this.prisma.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });
    return bookmark;
  }

  getAllBookmarks(userId: number) {
    const bookmarks = this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
    return bookmarks;
  }

  getBookmark(userId: number, bookmarkId: number) {
    const bookmark = this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
        userId,
      },
    });
    return bookmark;
  }
}
