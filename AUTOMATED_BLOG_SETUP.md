# Automated Blog Generation Setup

## 🚀 Quick Start

### 1. GitHub Repository Setup

1. **Push code to GitHub** (if not already done)
2. **Enable GitHub Actions**:
   - Go to your repository on GitHub
   - Click `Settings` tab
   - Click `Actions` > `General` in sidebar
   - Select `Allow all actions and reusable workflows`

### 2. Add API Key as Secret

1. **Go to repository Settings**
2. **Click `Secrets and variables` > `Actions`**
3. **Click `New repository secret`**
4. **Name**: `GEMINI_API_KEY`
5. **Value**: Your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
6. **Click `Add secret`**

### 3. Install Dependencies (Local Testing)

```bash
# Install new dependencies
npm install @google/generative-ai jsdom sharp

# Test locally (optional)
npm run news:monitor
```

## 🤖 How It Works

### Automated Daily Process
1. **8 AM UTC** (9 AM CET): GitHub Action triggers
2. **News Monitoring**: Scans Dutch news sources for e-step content
3. **Relevance Assessment**: AI filters for high-priority articles
4. **Analysis Generation**: Creates in-depth analysis articles
5. **Content Addition**: Automatically adds to your blog
6. **Git Commit**: Commits and pushes changes

### Manual Triggers
```bash
# Local testing
npm run news:monitor              # Check what news is found
npm run news:generate 3 4         # Generate 3 articles, priority 4+

# GitHub UI
Go to Actions tab > Daily Blog Generation > Run workflow
```

## 📊 Monitoring & Management

### Check Workflow Status
1. Go to `Actions` tab in your GitHub repository
2. Click on `Daily Blog Generation`
3. View recent runs and logs

### View Generated Content
- **Articles**: Added to `src/data/blog/articles.ts`
- **Images**: Saved to `public/images/`
- **Reports**: Available as workflow artifacts

### Adjust Settings
Edit `.github/workflows/daily-blog-generation.yml`:
- Change schedule: Modify the `cron` expression
- Article limits: Adjust `MAX_ARTICLES` and `MIN_PRIORITY`
- Add notifications: Uncomment Slack/email sections

## 🎯 Content Quality

### What Gets Generated
- **News-based**: Only articles based on recent e-step news
- **Netherlands-focused**: Dutch market analysis and context
- **In-depth**: Goes beyond surface news with predictions and analysis
- **SEO optimized**: Proper headers, tags, and structure

### Quality Filters
- **Relevance**: AI-assessed for e-step relevance
- **Priority**: Only high-priority (4-5/5) news processed
- **Uniqueness**: Duplicate content detection
- **Authority**: Links to original sources

## 🔧 Customization

### News Sources
Edit `scripts/news-monitor.js` to add/remove news sources:
```javascript
const NEWS_SOURCES = [
  { name: 'Custom Source', url: 'https://example.com/rss' },
  // Add your preferred news sources
];
```

### Analysis Focus
Modify prompts in `scripts/news-to-blog-pipeline.js`:
- Change analysis depth
- Adjust tone/style
- Add specific focus areas

### Generation Limits
In workflow file or locally:
```bash
npm run news:generate 5 3  # 5 articles, minimum priority 3
```

## 🚨 Troubleshooting

### Common Issues

**"GEMINI_API_KEY not found"**
- Ensure secret is added to GitHub repository
- Check secret name matches exactly: `GEMINI_API_KEY`

**"No relevant news found"**
- This is normal - not every day has e-step news
- Lower priority threshold: change `MIN_PRIORITY` to 3

**"Article generation failed"**
- Check API quota/billing on Google AI Studio
- Review logs in GitHub Actions for specific errors

**"Git push failed"**
- GitHub Actions has proper permissions by default
- Check if repository is private/public settings

### Debug Locally
```bash
# Set environment variable
export GEMINI_API_KEY="your_key_here"

# Run components separately
npm run news:monitor        # Test news detection
npm run news:generate 1 3   # Test article generation

# Check logs
node scripts/news-monitor.js > news-report.txt
cat news-report.txt
```

## 📈 Analytics

### Track Performance
- **GitHub Actions logs**: See generation success/failure rates
- **Article engagement**: Monitor which auto-generated articles perform best
- **News coverage**: Track what types of news get picked up

### Optimize Over Time
- Adjust priority thresholds based on results
- Fine-tune news sources based on quality
- Modify analysis prompts for better output

## 🎉 Success Indicators

✅ **Workflow runs successfully daily**  
✅ **Relevant news gets detected**  
✅ **Articles are automatically added**  
✅ **Content quality is high**  
✅ **SEO structure is maintained**  

## 💡 Pro Tips

1. **Monitor first week closely** to adjust settings
2. **Add webhook notifications** for important events
3. **Review generated content weekly** for quality
4. **Adjust timing** based on when news typically breaks
5. **Archive old workflow artifacts** to save space

---

## 🆘 Support

If you encounter issues:
1. Check GitHub Actions logs first
2. Verify API key is working with manual test
3. Review this documentation for common solutions
4. Test individual components locally