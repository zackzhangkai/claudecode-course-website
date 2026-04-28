import Link from 'next/link'
import { getAllCourses } from '@/lib/courses'

export default function Home() {
  const courses = getAllCourses()

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-950 to-blue-900/30" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <nav className="relative z-10 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Tech Hub
            </Link>
            <div className="flex items-center gap-6">
              <a href="/#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">训练营</a>
              <a href="https://b773af71.openclaw-course-website.pages.dev/" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors">OpenClaw</a>
              <a href="/#compare" className="text-sm text-gray-400 hover:text-white transition-colors">课程对比</a>
              <a href="/#faq" className="text-sm text-gray-400 hover:text-white transition-colors">常见问题</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-red-400">限时优惠 · 仅剩 23 个名额</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              AI 时代
            </span>
            <span className="block text-3xl md:text-5xl mt-2">
              最快的学习路径
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            别人还在摸索，你已经能用 AI 创造价值。<br/>
            7 天实战训练营，带你从小白到独立开发 AI 应用
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl font-bold text-lg hover:from-red-500 hover:to-orange-400 transition-all transform hover:scale-105 shadow-lg shadow-red-500/30 animate-pulse"
            >
              💰 限时 99 元加入训练营
            </a>
            <Link
              href="/courses/lesson1-basics"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              免费试看第一节
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '500+', label: '学员已加入' },
              { value: '89%', label: '完成率' },
              { value: '4.9', label: '满意度' },
              { value: '7', label: '天见效' },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              🚀 你是否也经历过这些？
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤔', title: 'AI 工具一堆', desc: '不知道哪个适合自己，花了大量时间调研却毫无头绪' },
              { icon: '📚', title: '学了很多', desc: '看了无数教程，一到实际应用还是无处下手' },
              { icon: '😰', title: '被替代焦虑', desc: '担心 AI 时代到来，自己却找不到价值定位' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm mb-4">
              ⏰ 限时优惠，24小时后恢复原价
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              7 天 AI 训练营
            </h2>
            <p className="text-gray-400">从 ¥199 降至 <span className="text-red-400 font-bold">¥99</span></p>
          </div>

          <div className="relative">
            <div className="absolute -top-4 right-4 z-10 px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full animate-pulse">
              🔥 限时优惠
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-red-500/50 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="text-gray-400 line-through mb-2">原价: ¥199</div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    ¥99
                  </div>
                  <div className="text-sm text-gray-500 mt-2">仅限前 30 名学员</div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    '✅ 7 天完整训练营课程（价值 ¥199）',
                    '✅ 加入专属学习社群',
                    '✅ 导师一对一答疑（价值 ¥199）',
                    '✅ 3 个实战项目指导（价值 ¥199）',
                    '✅ 课程持续更新',
                    '✅ 学员专属资源包',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base">
                      <span className="text-green-400">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl font-bold text-lg text-center hover:from-red-500 hover:to-orange-400 transition-all transform hover:scale-[1.02] shadow-lg shadow-red-500/30"
                >
                  🚀 立即加入训练营
                </a>

                <div className="text-center mt-4 text-sm text-gray-500">
                  💳 支持微信/支付宝支付
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>🛡️ 7 天无理由退款</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>⭐ 4.9 分好评</span>
            </div>
          </div>
        </div>
      </section>

      <section id="compare" className="relative z-10 py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">免费 vs 付费</h2>
            <p className="text-gray-400">你将获得什么？</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-center mb-6">
                <div className="text-lg text-gray-400 mb-2">免费内容</div>
                <div className="text-2xl font-bold">预览课程</div>
              </div>
              <div className="space-y-3 text-gray-400">
                <div>✗ 基础课程文章</div>
                <div>✗ 无社群互动</div>
                <div>✗ 无答疑服务</div>
                <div>✗ 无实战指导</div>
                <div>✗ 需自学成才</div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <div className="text-3xl font-bold text-gray-500">¥0</div>
                <Link
                  href="/courses/lesson1-basics"
                  className="mt-4 block w-full py-3 bg-white/5 rounded-xl text-gray-400 hover:bg-white/10 transition-all"
                >
                  免费试看
                </Link>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-b from-purple-900/50 to-blue-900/50 rounded-2xl border-2 border-red-500/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                推荐
              </div>
              <div className="text-center mb-6">
                <div className="text-lg text-purple-400 mb-2">付费内容</div>
                <div className="text-2xl font-bold">训练营</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>完整 7 天课程</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>专属学习社群</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>导师一对一答疑</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>3 个实战项目</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>持续更新迭代</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <div className="text-gray-400 line-through">¥199</div>
                <div className="text-3xl font-bold text-red-400">¥99</div>
                <a
                  href="#contact"
                  className="mt-4 block w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl font-bold hover:from-red-500 hover:to-orange-400 transition-all"
                >
                  立即加入
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">7 天学习路径</h2>
            <p className="text-gray-400">每天一个里程碑</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { day: 'Day 1', title: 'AI 基础入门', desc: '提示词工程核心技巧', color: 'purple' },
              { day: 'Day 2', title: '提示词进阶', desc: 'Few-shot、思维链', color: 'blue' },
              { day: 'Day 3', title: 'AI 编程', desc: 'Claude Code 实战', color: 'cyan' },
              { day: 'Day 4', title: '自动化', desc: '工作流构建', color: 'green' },
              { day: 'Day 5', title: 'API 集成', desc: '第三方服务', color: 'yellow' },
              { day: 'Day 6', title: '项目实战', desc: '完整项目开发', color: 'orange' },
              { day: 'Day 7', title: '部署上线', desc: '生产环境部署', color: 'red' },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                <div className={`inline-block px-3 py-1 bg-${item.color}-500/20 text-${item.color}-400 rounded-full text-sm mb-3`}>
                  {item.day}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 bg-gray-900 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">立即加入训练营</h2>
            <p className="text-gray-400 mb-8">扫码添加微信，备注"训练营" <span className="text-red-400">(¥99)</span></p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="p-4 bg-white rounded-2xl">
                <img src="/images/wechat-qr.png" alt="微信二维码" className="w-48 h-48 object-contain" />
              </div>
              
              <div className="text-left space-y-3 text-sm text-gray-400">
                <div>1. 扫码添加微信</div>
                <div>2. 备注"训练营"</div>
                <div>3. 支付 ¥99</div>
                <div>4. 邀请入群开始学习</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">免费预览课程</h2>
            <p className="text-gray-400">先试看，再决定</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🤖</span>
                <h3 className="text-lg font-semibold">Claude Code 课程</h3>
              </div>
              <div className="space-y-3">
                {courses.slice(0, 4).map((course, index) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 transition-all"
                  >
                    <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-xs text-gray-500">{course.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🦀</span>
                <h3 className="text-lg font-semibold">OpenClaw 课程</h3>
                <span className="text-xs text-gray-500">(OpenCode 免费模型)</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'OpenClaw 入门', desc: '零基础快速上手 OpenClaw' },
                  { title: '提示词工程', desc: '如何高效提问 AI' },
                  { title: '多模型对比', desc: '选择最适合的模型' },
                  { title: '实战案例', desc: '真实场景应用' },
                ].map((course, index) => (
                  <a
                    key={index}
                    href="https://b773af71.openclaw-course-website.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all"
                  >
                    <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-xs text-gray-500">{course.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
              <a
                href="https://b773af71.openclaw-course-website.pages.dev/"
                target="_blank"
                className="mt-4 block text-center py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-all"
              >
                查看更多 OpenClaw 课程 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 py-16 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">常见问题</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: '零基础可以学吗？', a: '可以，课程专为小白设计，从最基础讲起' },
              { q: '课程是直播还是录播？', a: '录播课程 + 社群答疑，可反复观看' },
              { q: '支付后如何学习？', a: '添加微信后 24 小时内邀请入群，发放课程链接' },
              { q: '需要准备什么？', a: '一部电脑 + 稳定的网络即可' },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/5 rounded-xl">
                <h3 className="font-semibold mb-2">Q: {item.q}</h3>
                <p className="text-gray-400 text-sm">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2026 AI Tech Hub</p>
        </div>
      </footer>
    </div>
  )
}