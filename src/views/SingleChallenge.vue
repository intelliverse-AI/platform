<template>
  <div>
    <main class="dashboard">
            <div class="dash-side-nav">
                <div class="links nav">
                    <button class="link">
                        <div class="icon menu-btn">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div class="text">
                            <span class="dash-logo">
                                <span class="logo-text-one">AfroAI</span>
                                <span class="logo-text-two">Innovate</span>
                            </span>
                        </div>
                    </button>
                    <button class="link create-btn">
                        <div class="icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="text">
                            <span>Create</span>
                        </div>
                    </button>
                    <button class="link btn-content" onclick="location.href='index.html'">
                        <div class="icon">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div class="text">
                            <span>Home</span>
                        </div>
                    </button>
                    <button class="link btn-content">
                        <div class="icon">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div class="text">
                            <span>Challenges</span>
                        </div>
                    </button>
                    <button class="link btn-content">
                        <div class="icon">
                            <i class="fa-solid fa-table"></i>
                        </div>
                        <div class="text">
                            <span>Datasets</span>
                        </div>
                    </button>
                    <button class="link btn-content">
                        <div class="icon">
                            <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div class="text">
                            <span>Modules</span>
                        </div>
                    </button>
                    <button class="link btn-content">
                        <div class="icon">
                            <i class="fa-solid fa-code"></i>
                        </div>
                        <div class="text">
                            <span>Code</span>
                        </div>
                    </button>
                    <button class="link btn-content">
                        <div class="icon">
                            <i class="fa-solid fa-message"></i>
                        </div>
                        <div class="text">
                            <span>Discussion</span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="dash-side-content">
                <div class="dash-title">
                    <div class="illusion"></div>
                    <div class="dash-profile-access">
                        <button class="btn-login">Login</button>
                        <button class="btn-register">Register</button>
                    </div>
                </div>
                <div class="single-page">
                    <div class="single-pg-content">
                        <div class="spc-top">
                            <div class="spc-top-overlay">
                                <div class="competition-top">
                                    <span class="compe-status"><i class="fa-solid fa-tag"></i> Featured Challenge</span>
                                    <div class="title-price">
                                        <div class="title">
                                            <h1>Open Problems – Single-Cell Perturbations</h1>
                                            <p>Predict how small molecules change gene expression in different cell types</p>
                                        </div>
                                        <div class="pricing">
                                            <h3>$100, 000</h3>
                                            <p>Prize money</p>
                                        </div>
                                    </div>
                                    <div class="compe-in-info">
                                        <span>221 teams 2 months to go</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="competition-tabs-join-btn">
                            <div class="tabs">
                                <button class="btn-tabbed-competition active-tab-btn" onclick="showTab(0)">Overview</button>
                                <button class="btn-tabbed-competition" onclick="showTab(1)">Data</button>
                                <button class="btn-tabbed-competition" onclick="showTab(2)">Discussion</button>
                                <button class="btn-tabbed-competition" onclick="showTab(3)">Leaderboard</button>
                                <button class="btn-tabbed-competition" onclick="showTab(4)">Rules</button>
                            </div>
                            <div class="btn-join">
                                <button>Join Challenge</button>
                            </div>
                        </div>
                        <div class="spc-content">
                            <div class="overview-tab tabs-content spc active-tab">
                                <div class="overview-tab-container">
                                    <div class="left tabs-nav">
                                        <button class="accordion-button" id="overview-tab-content">
                                            Overview
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <p>The goal of this competition is to predict how small molecules change gene expression in different cell types.</p>
                                            <p>Your work will help develop methods to predict how cells respond to small molecule drug perturbations, which could have important applications in drug discovery and basic biology.</p>
                                        </div>
                                    
                                        <button class="accordion-button" id="description-tab-content">
                                            Description
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <p>Human biology can be complex, in part due to the function and interplay of the body's approximately 37 trillion cells, which are organized into tissues, organs, and systems. However, recent advances in single-cell technologies have provided unparalleled insight into the function of cells and tissues at the level of DNA, RNA, and proteins. Yet leveraging single-cell methods to develop medicines requires mapping causal links between chemical perturbations and the downstream impact on cell state. These experiments are costly and labor intensive, and not all cells and tissues are amenable to high-throughput transcriptomic screening. If data science could help accurately predict chemical perturbations in new cell types, it could accelerate and expand the development of new medicines.</p>
                                            <p>Several methods have been developed for drug perturbation prediction, most of which are variations on the autoencoder architecture (Dr.VAE, scGEN, and ChemCPA). However, these methods lack proper benchmarking datasets with diverse cell types to determine how well they generalize. The largest available training dataset is the NIH-funded Connectivity Map (CMap), which comprises over 1.3M small molecule perturbation measurements. However, the CMap includes observations of only 978 genes, less than 5% of all genes. Furthermore, the CMap data is comprised almost entirely of measurements in cancer cell lines, which may not accurately represent human biology.</p>
                                        </div>
                                        <button class="accordion-button" id="evaluate-tab-content">
                                            Evaluate
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <p>We use the Mean Rowwise Root Mean Squared Error to score submissions, computed as follows:</p>
                                            <math xmlns="http://www.w3.org/1998/Math/MathML">
                                                <mrow>
                                                    <mi>x</mi>
                                                    <mo>=</mo>
                                                    <mfrac>
                                                        <mrow>
                                                            <mo>-</mo>
                                                            <mi>b</mi>
                                                            <mo>±</mo>
                                                            <msqrt>
                                                                <mrow>
                                                                    <msup><mi>b</mi><mn>2</mn></msup>
                                                                    <mo>-</mo>
                                                                    <mn>4</mn>
                                                                    <mi>a</mi>
                                                                    <mi>c</mi>
                                                                </mrow>
                                                            </msqrt>
                                                        </mrow>
                                                        <mrow> <mn>2</mn> <mi>a</mi> </mrow>
                                                    </mfrac>
                                                </mrow>
                                            </math>                                    
                                            <p>Good</p>
                                        </div>
                                        <button class="accordion-button" id="timeline-tab-content">
                                            Timeline
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <ul>
                                                <li><strong>September 12, 2023</strong> - Start Date.</li>
                                                <li><strong>September 12, 2023</strong> - Entry Deadline. You must accept the competition rules before this date in order to compete.</li>
                                                <li><strong>September 12, 2023</strong> - Team Merger Deadline. This is the last day participants may join or merge teams.</li>
                                                <li><strong>September 12, 2023</strong> - Final Submission Deadline.</li>
                                            </ul>
                                        </div>
                                        <button class="accordion-button" id="prices-tab-content">
                                            Pricing
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <p>$50,000 will be awarded to the Top 5 teams with the highest scores on the Kaggle Leaderboard at the conclusion of the competition:</p>
                                            <ul>
                                                <li>1st Place - $12,000</li>
                                                <li>2nd Place - $10,000</li>
                                                <li>3rd Place - $10,000</li>
                                                <li>4th Place - $10,000</li>
                                                <li>5th Place - $8,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="right page-move tabs-nav">
                                        <a href="#overview-tab-content">Overview</a>
                                        <a href="#description-tab-content">Description</a>
                                        <a href="#evaluate-tab-content">Evaluation</a>
                                        <a href="#timeline-tab-content">Timeline</a>
                                        <a href="#prizes-tab-content">Prizes</a>
                                    </div>
                                </div>
                            </div>
                            <div class="data-tab tabs-content">
                                <div class="overview-tab-container">
                                    <div class="left tabs-nav">
                                        <button class="accordion-button" id="overview-tab-content">
                                            Dataset Description
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <p>The goal of this competition is to predict how small molecules change gene expression in different cell types.</p>
                                            <p>Your work will help develop methods to predict how cells respond to small molecule drug perturbations, which could have important applications in drug discovery and basic biology.</p>
                                        </div>
                                    
                                        <button class="accordion-button" id="description-tab-content">
                                            Description
                                            <span class="accordion-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                        </button>
                                        <div class="accordion-content active-acc">
                                            <p>Human biology can be complex, in part due to the function and interplay of the body's approximately 37 trillion cells, which are organized into tissues, organs, and systems. However, recent advances in single-cell technologies have provided unparalleled insight into the function of cells and tissues at the level of DNA, RNA, and proteins. Yet leveraging single-cell methods to develop medicines requires mapping causal links between chemical perturbations and the downstream impact on cell state. These experiments are costly and labor intensive, and not all cells and tissues are amenable to high-throughput transcriptomic screening. If data science could help accurately predict chemical perturbations in new cell types, it could accelerate and expand the development of new medicines.</p>
                                            <p>Several methods have been developed for drug perturbation prediction, most of which are variations on the autoencoder architecture (Dr.VAE, scGEN, and ChemCPA). However, these methods lack proper benchmarking datasets with diverse cell types to determine how well they generalize. The largest available training dataset is the NIH-funded Connectivity Map (CMap), which comprises over 1.3M small molecule perturbation measurements. However, the CMap includes observations of only 978 genes, less than 5% of all genes. Furthermore, the CMap data is comprised almost entirely of measurements in cancer cell lines, which may not accurately represent human biology.</p>
                                        </div>
                                    </div>
                                    <div class="right page-move tabs-nav">
                                        <a href="#overview-tab-content">Overview</a>
                                        <a href="#description-tab-content">Description</a>
                                        <a href="#evaluate-tab-content">Evaluation</a>
                                        <a href="#timeline-tab-content">Timeline</a>
                                        <a href="#prizes-tab-content">Prizes</a>
                                    </div>
                                </div>
                            </div>
                            <div class="discussion-tab tabs-content">Discussion Content</div>
                            <div class="leaderboard-tab tabs-content">
                                <h2>LeaderBoad</h2>
                                <p>The top of the top among the top 1%</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Team</th>
                                            <th>Image</th>
                                            <th>Score</th>
                                            <th>Entries</th>
                                            <th>Last</th>
                                            <th>Join</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Team A</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 1"></div></td>
                                            <td>0.233</td>
                                            <td>5</td>
                                            <td>16h</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Team B</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 2"></div></td>
                                            <td>0.567</td>
                                            <td>7</td>
                                            <td>5h</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Team C</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 3"></div></td>
                                            <td>0.874</td>
                                            <td>3</td>
                                            <td>2d</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Team D</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 4"></div></td>
                                            <td>0.321</td>
                                            <td>6</td>
                                            <td>1w</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Team E</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 5"></div></td>
                                            <td>0.425</td>
                                            <td>4</td>
                                            <td>3d</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Team F</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 6"></div></td>
                                            <td>0.654</td>
                                            <td>8</td>
                                            <td>4h</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Team G</td>
                                            <td><div class="circle"><img src="css/img/panda.png" alt="Team Image 7"></div></td>
                                            <td>0.987</td>
                                            <td>2</td>
                                            <td>1d</td>
                                            <td></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div class="rules-tab tabs-content">
                                <h2>Rules</h2>
                                <h3>One account per participant</h3>
                                <p>You cannot sign up to Kaggle from multiple accounts and therefore you cannot submit from multiple accounts.</p>
                                <h3>Team Mergers</h3>
                                <p>Team mergers are allowed and can be performed by the team leader. In order to merge, the combined team must have a total submission count less than or equal to the maximum allowed as of the Team Merger Deadline. The maximum allowed is the number of submissions per day multiplied by the number of days the competition has been running.</p>
                                <h3>Competition Timeline</h3>
                                <p>Competition Timeline dates (including Entry Deadline, Final Submission Deadline, Start Date, and Team Merger Deadline, as applicable) are reflected on the competition’s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>