import React from "react";
import axios from "axios";

function Home() {
  async function getTranscription() {
    const transcription = "";
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/transcribe/",
        // convert value to string
        { data: "audio" },
        {
          headers: {
            "Access-Control-Allow-Origin": "https://127.0.0.1:5000",
          },
        }
      );
      console.log("transcription response: ", response.data);
    } catch (error) {
      console.log("ERROR\n");
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Freestyle Faster.</h1>
      <br />
      <h3>
        Welcome to our webapp designed specifically for artists who want to
        improve their freestyle skills! Whether you're an aspiring rapper, poet,
        or simply someone who loves to improvise, our app will help you
        freestyle faster and more confidently.
      </h3>
      <br />
      <h3>
        With our app, you'll have access to a variety of tools and features that
        will enhance your freestyling abilities. Here are just a few of the
        things you can expect:
      </h3>
      <br />
      <ul>
        <li>
          Rhyme dictionary: Our app includes a comprehensive rhyming dictionary
          that will help you find the perfect word to match your flow. Simply
          enter a word and we'll generate a list of rhyming words to choose
          from.
        </li>
        <li>
          Beat library: We've compiled a library of beats that you can use to
          practice your freestyling. From classic boom bap to modern trap, we've
          got you covered.
        </li>
        <li>
          Recording studio: Our built-in recording studio allows you to record
          your freestyles and listen back to them later. This is a great way to
          track your progress and identify areas for improvement.
        </li>
        <li>
          Freestyle prompts: If you're ever stuck for inspiration, our app
          includes a range of freestyle prompts to get your creative juices
          flowing. These prompts are designed to challenge you and push you
          outside of your comfort zone.
        </li>
        <li>
          Community forum: Connect with other artists using our community forum.
          Share your freestyles, get feedback, and collaborate with others to
          improve your skills.
        </li>
      </ul>
      <br />
      <h3>
        Our webapp is easy to use and accessible from any device with an
        internet connection. Simply sign up and start freestyling today!
      </h3>
      <br />
      <button>👀 TRY THE BETA 👀</button>
    </div>
  );
}

export default Home;
