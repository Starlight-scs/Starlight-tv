import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';



interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

export default function PlayVideoModal({
  changeState,
  overview,
  state,
  title,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="border py-o.5 px-1 border-gray-200 rounded">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <MediaPlayer className="w-full" src={youtubeUrl} >
        <MediaProvider />
        <DefaultVideoLayout thumbnails={youtubeUrl} icons={defaultLayoutIcons} />
        </MediaPlayer>
      </DialogContent>
    </Dialog>
  );
}