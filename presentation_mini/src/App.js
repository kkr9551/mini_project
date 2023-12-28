import "./app.css";
import c_table from "./contingency_table.png";
import chi_test_result from "./chi_test_result.png";
import CQL_meeldima from "./CQL_meeldima.png";
import CQL_armastama from "./CQL_armastama.png";
import figure_comp from "./comparison.png";
import visual_comp from "./visualisedComp.png";
import scriptScr from "./myScript.png"
import sorted_data from "./auto_sorted_data.png";

function App() {
  return (
    <div>
      <h1>
        How <span className="word">armastama</span> differs from <span className="word">meeldima</span> in stimulus: A mini project
      </h1>
      
      <section>
        <h2>Introduction</h2>

        <p>
          The interest in this topic arose from another project in the course Corpus Linguistics —— the stimulus in the <span className="word">vajama</span> construction 
          and the <span className="word">vaja olema</span> construction. I wondered whether two verbs —— <span className="word">armastama</span> and <span className="word">meeldima</span> 
          differ from each other in the preference for argument forms. The verbal phrases governed by <span className="word">armastama</span> or <span className="word">meeldima</span> feature two thematic roles: stimulus and experiencer. Same as the contrast between <span className="word">vajama</span> and <span className="word">vaja olema</span>, the stimulus 
          in the clause governed by <span className="word">armastama</span> is the object, whereas the stimulus in the clause predicated by <span className="word">meeldima</span> is the subject with the experiencer marked by the allative case. 
          The comparison <span>&#40;</span>Figure 1, 2<span>&#41;</span> between the da-infinitive foms governed by <span className="word">armastama</span> and <span className="word">meeldima</span> shows that 
          both <span className="word">armastama</span> and <span className="word">meeldima</span> prefer the da-infinitive of specific verbs. Apart from da-infinitive, both <span className="word">armastama</span> and <span className="word">meeldima</span> can select mine-AN <span>&#40;</span>action nomial<span>&#41;</span>. Unfortunately, the parallable concordance on 
          the Sketch Engine reveals little about the frequency of mine-An as the stimulus in the two verbal phrases. Hence the research focus of this mini project is 
          to explore the association between the two verbs, both of which express the state of being pleased by the stimulus, and the non-finite forms of the stimulus.
        </p> 

        <img src={figure_comp} alt="comparison"/>
        <img src={visual_comp} alt="visualisation"/>

      </section>

      <section>
      <h2>Methods</h2>
        <p>
          This mini project focuses on the use of two verbs whose pragmatic meanings are similar. Hence, I 
          searched for a set of data on the platform Sketch Engine. Sketch Engine is a corpus tool by which 
          researchers can search and manage text copora. I selected the sub-corpus, Web 2021, in the 
          Estonian National Corpus 2021. Then, I narrowed down the scope of this mini project, focusing on the corpus whose crawl year is 2021; topic is education; the genre is periodicals. 
        </p>

        <p>
          I first used CQL <span>&#40;</span>corpus query languages<span>&#41;</span> to retrieve the data I need <span>&#40;</span>Figure 3, 4<span>&#41;</span>. In sifting mine-AN argument in the <span className="word">meeldima</span> phrases, the word form for retrival is in the nominal case, whereas the word form in retrieving <span className="word">armastama</span> phrases is marked with the partitive case. 
        </p>

        <img src={CQL_meeldima} alt="CQL"/>
        <img src={CQL_armastama} alt="CQL"/>

        <p>
          After data cleaning, I annotated the data. Firstly, using the plain text editor SubEthaEdit, I removed irrelevant data like detail regarding where the data is from. Secondly, remove the extra coma characters; in this process, I also quickly read through the sentence examples to ensure no irrelevant sentences. 
          The result of the data cleaning is a dataframe with two columns labelled "corpus" and "example sentences". There are two ways of annotating. The first method is to add extra two columns for the annotation about verbs <span>&#40;</span>independent variables<span>&#41;</span> and non-finite forms <span>&#40;</span>dependent variables<span>&#41;</span>. The 
          second way is to write a Python script and automatise the work on the Visual Studio <span>&#40;</span>Figure 5, 6<span>&#41;</span>. The sorted data shows that there are 49 examples of <span className="word">armastama</span>-phrases and 200 examples of <span className="word">meeldima</span>-phrases.
        </p>

        <img src={scriptScr} alt="script"/>
        <img src={sorted_data} alt="sorted"/>

        <p>
          As for the presentation form, I selected the JavaScript file as the presentation base. More accurately, I used JSX, an syntax extention to JavaScript. 
          JSX stands for JavaScript XML, allowing us to write HTML in React. In other words, all the components like paragraphs, 
          images, etc marked with HTML tags will be rendered a variable described by the JSX. It can look like this: const variable = tag + content + the closing tag. 
        </p>

        <p>
          I used Chi-square test to analyse the sample data on Thonny. Python packages include pandas, scipy, matplotlib, and seaborn. The last two are tools for visualisation. The null hypothesis is that; the alternative hypothesis is that in the general population, there is no relationship between two Estonian verbs whose meaning is parallel to the verb "like" in English and the non-finite forms of the stimulus governed by the two. For this test, we use 𝛂 = 0.05 
        </p>
      </section>



      <section>
      <h2>Finding</h2>
      <p>
        The contingency table <span>&#40;</span>Figure 7<span>&#41;</span> show that the both <span className="word">armastama</span> and <span className="word">meeldima</span> prefers the stimulus in the da-infinitive form, whereas there are only a few example containing stimulus in the mine-AN form. 
      </p>

      <img src={c_table} alt="ctable"/>

      <p>
        The chi-square test result <span>&#40;</span>Table 1<span>&#41;</span> shows that at the five per cent significance level, 
        the data provides sufficient evidence to conclude that the choice of verb —— 
        either <span className="word">meeldima</span> or <span className="word">armastama</span> —— and the argument as the stimulus —— either da 
        infinitive or non-da argument —— are associated <span>&#40;</span>χ² = 5.65040, p <span>&#60;</span> 0.05<span>&#41;</span>. The contingency table shows that both two verbs tend to select stimuli in the da-infinitve forms.
      </p>

      <img src={chi_test_result} alt="value_table"/>

      </section>

      
    </div>
  );
}

export default App;
