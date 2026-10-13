import fallinlove from '@/public/img/fallinlove.png';
import { cn } from '@/lib/utils';

interface SpinningCoverProps {
    songIsPlaying: boolean;
    className?: string;
}

// import the current song cover
function getCurrentSongCover() {
    return fallinlove;
}

export const SpinningCover: React.FC<SpinningCoverProps> = ({ songIsPlaying, className }) => {
    // return a spinning round image of an album cover
    return (
        // put the image on the left deck of the turntable
            <img
                src={getCurrentSongCover().src}
                alt="Cover"
                className={cn("noselect h-auto aspect-square object-cover animate-spin-slow rounded-full", className)}
                draggable="false"
                style={{
                    animationFillMode: 'forwards',
                    animationPlayState: songIsPlaying ? 'running' : 'paused',
                }}
                />
    );
}
