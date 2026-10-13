
import photo from './assets/gettyimages-1328210728-612x612.jpg';
export function Content() {
    return (
        <div className="flex flex-col justify-between items-center h-[90vh] my-8">
            <header className=" text-4xl bg-white text-blue-700 rounded-full p-2 font-medium">Welcome to my React page!</header>
            <main className="text-3xl text-white font-bold font-serif">My name is Rami, and I really love Medium Rare Steaks</main>
            <img src={photo} alt="Medium Rare Steak"></img>
            <footer>All rights reserved &copy; Rami Daood</footer>
        </div>
    );
}