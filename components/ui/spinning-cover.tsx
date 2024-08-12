import fallinlove from '@/public/img/fallinlove.png';

interface SpinningCoverProps {
    songIsPlaying: boolean;
}

// import the current song cover
function getCurrentSongCover() {
    return fallinlove;
}

export const SpinningCover: React.FC<SpinningCoverProps> = (songIsPlaying) => {
    // return a spinning round image of an album cover
    return (
        // put the image on the left deck of the turntable getSpin(songIsPlaying.songIsPlaying)
            <img
                src={getCurrentSongCover().src}
                alt="Cover"
                className="noselect w-[25.4%] h-auto animate-spin-slow rounded-full"
                draggable="false"
                style={{
                    animationFillMode: 'forwards',
                    animationPlayState: songIsPlaying.songIsPlaying ? 'running' : 'paused',
                }}
                />
    );
}