import "./app.css";
import figure_1 from "./Figure_1.png";
import table_1 from "./result.png";
import figure_2 from "./Figure_2.png";
import figure_comp from "./comparison.png";
import visual_comp from "./visualisedComp.png";

function App() {
  return (
    <div>
      <h1>
        Can <span className="word">armastama</span> differs from <span className="word">meeldima</span> in stimulus: A mini project
      </h1>
      
      <section>
        <h2>Introduction</h2>

        <p>
          The interest in this topic arose from another project in the course Corpus Linguistics —— the stimulus in the <span className="word">vajama</span> construction 
          and the <span className="word">vaja olema</span> construction. I wondered whether two verbs —— <span className="word">armastama</span> and <span className="word">meeldima</span> will 
          differ from each other in the preference of arguments. Same as the contrast between <span className="word">vajama</span> and <span className="word">vaja olema</span>, the stimulus 
          in the clause governed by <span className="word">armastama</span> is the object, whereas the stimulus in the clause predicated by <span className="word">meeldima</span> is the subject with the experiencer marked by the allative case. 
          The comparison <span>&#40;</span>Figure 1, 2<span>&#41;</span> of the two lemmas shows that there might be a tendency of more frequently using one than another when the argument is in the da-infinitive. 
        </p>

        <img src={figure_comp} alt="comparison"/>
        <img src={visual_comp} alt="visualisation"/>

        <p>
          Hence, the research question is whether there is an association between the verb —— <span className="word">armastama</span> and <span className="word">meeldima</span> —— and the argument —— da-infinitive and other complements except da-infinitive —— 
          when the stimulus in the two specific Estonian clause constructions, whose pramatic meanings are corresponding to the meaning of someone likes something in English, is in the da-infinitive. 
          The null hypothesis is that there would be no association between the verb and the stimulus. 
        </p> 
      </section>

      <section>
      <h2>Methods</h2>
        <p>
          This mini project focuses on the use of two verbs whose pragmatic meanings are similar. Hence, I 
          searched for a set of data on the platform Sketch Engine. Sketch Engine is a corpus tool by which 
          researchers can search and manage text copora. I selected the sub-corpus, Web 2021, in the 
          Estonian National Corpus 2021. Also, the genre of this sub-corpus is "culture and entertainment". 
        </p>

        <p>
          I used CQL <span>&#40;</span>corpus query languages<span>&#41;</span> to retrieve the data I need. The 
          CQL is "<span>&#60;</span>s<span>&#62;</span><span>&#91;</span><span>&#93;</span><span>&#10100;</span>2<span>&#10101;</span><span>&#91;</span>lemma = "armastama|meeldima"<span>&#93;</span><span>&#91;</span><span>&#93;</span><span>&#10100;</span>2,3<span>&#10101;</span><span>&#91;</span>tag = "V" & <span>&#40;</span>word = ".*da"|word = ".*ta"<span>&#41;</span><span>&#93;</span>" 
          and "<span>&#60;</span>s<span>&#62;</span><span>&#91;</span><span>&#93;</span><span>&#10100;</span>2<span>&#10101;</span><span>&#91;</span>lemma = "armastama|meeldima"<span>&#93;</span>". However, a problem <span>&#60;</span>Figure 1<span>&#61;</span> arose after I merged the two downloaded csv files into the one. The screenshot of the 
          terminal shows that many data are the same. Hence, I replaced the repeated one with the new data I downloaded from the same corpus.
        </p>

        <img src={figure_2} alt="problem"/>

        <p>
          I selected the JavaScript file as the presentation base. More accurately, I used JSX, an syntax extention to JavaScript. 
          JSX stands for JavaScript XML, allowing us to write HTML in React. In other words, all the components like paragraphs, 
          images, etc marked with HTML tags will be rendered a variable described by the JSX. It can look like this: const variable = tag + content + the closing tag. 
        </p>
      </section>

      <section>
      <h2>Finding</h2>
      <p>
        The contingency table <span>&#40;</span>Figure 2<span>&#41;</span> show that the even ration 
        appears in the frequency of non-da argument. In the frequency of da argument, the verb <span className="word">meeldima</span> occupies
        a large proportion.
      </p>

      <img src={figure_1} alt="ctable"/>

      <p>
        The chi-square test result <span>&#40;</span>Table 1<span>&#41;</span> shows that at the five per cent significance level, 
        the data provides sufficient evidence to conclude that the choice of verb —— 
        either <span className="word">meeldima</span> or <span className="word">armastama</span> —— and the argument as the stimulus —— either da 
        infinitive or non-da argument —— are associated <span>&#40;</span>χ² = 6.74030220132567, p <span>&#60;</span> 0.05<span>&#41;</span>.
      </p>

      <img src={table_1} alt="value_table"/>

      </section>

      <section>
      <h2>Limitations</h2>
      <p>
        The best way is to refine the CQL instead of downloading and manually filling in the new data to the csv file. Also, the visualised comparison between <span className="word">armastama</span> and <span className="word">meeldima</span> indicates one point missed in this mini project —— there might be a tendency of using specific da-infinitive with either <span className="word">armastama</span> or <span className="word">meeldima</span>. Therefore, the research question 
        should focus not only on the association between verbs and arguments but also the distinction between one from another in the preference of using specific da-infinitives. For instance, whether the da-inifinitive <span className="word">aidata</span> is more likely to be frequently used together with <span className="word">armastama</span>. The refinement of research questions also entail improving the CQL for retrieval. Finally, I also consider further exploration of using python packages to modify the csv file.
      </p>
      </section>
    </div>
  );
}

export default App;
