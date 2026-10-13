import React from 'react';
import {
  Check,
  ChevronDown,
  ChevronRight,
  Search,
  Bell,
  Home,
  CheckSquare,
  ArrowLeftRight,
  CreditCard,
  Wallet,
  TrendingUp,
  Building2,
  Workflow,
  DollarSign,
  Settings,
  Plus,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  PlusCircle,
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <div
      className="rounded-2xl overflow-hidden p-3 md:p-4 w-full select-none pointer-events-none text-[11px] font-body"
      style={{
        background: 'rgba(255, 255, 255, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: 'var(--shadow-dashboard)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="bg-background rounded-xl border border-border/80 shadow-xs flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-background shrink-0">
          {/* Left: Logo "N" in rounded box + "Nexora" + chevron */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-foreground text-background flex items-center justify-center font-bold text-[10px] leading-none">
              N
            </div>
            <span className="font-semibold text-foreground text-[11px] tracking-tight">
              Nexora
            </span>
            <ChevronDown className="w-3 h-3 text-muted-foreground ml-0.5" />
          </div>

          {/* Center: Search bar with ⌘K shortcut */}
          <div className="flex items-center gap-2 bg-secondary/80 border border-border/70 rounded-lg px-2.5 py-1 text-muted-foreground w-64 md:w-72">
            <Search className="w-3 h-3 text-muted-foreground shrink-0" />
            <span className="text-[10px] truncate text-muted-foreground">Search anything...</span>
            <kbd className="ml-auto font-mono text-[9px] bg-background border border-border/80 px-1 py-0.5 rounded text-muted-foreground shrink-0">
              ⌘K
            </kbd>
          </div>

          {/* Right: "Move Money" + bell + avatar "JB" */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium text-[10px] flex items-center gap-1 border border-border/60"
            >
              Move Money
            </button>
            <div className="relative text-muted-foreground">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-accent rounded-full" />
            </div>
            <div className="w-6 h-6 rounded-full bg-accent/15 text-accent font-semibold flex items-center justify-center text-[10px] ring-1 ring-accent/30">
              JB
            </div>
          </div>
        </header>

        {/* Dashboard Body: Sidebar + Main Content */}
        <div className="flex min-h-[380px]">
          {/* Sidebar (w-40) */}
          <aside className="w-40 border-r border-border/60 p-2.5 flex flex-col gap-0.5 bg-background shrink-0">
            {/* Primary Nav Items */}
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-secondary text-foreground font-medium">
              <Home className="w-3.5 h-3.5 text-foreground" />
              <span>Home</span>
            </div>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Tasks</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-secondary text-foreground font-semibold">
                10
              </span>
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Transactions</span>
            </div>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-muted-foreground">
              <div className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Payments</span>
              </div>
              <ChevronRight className="w-3 h-3 text-muted-foreground/70" />
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <Wallet className="w-3.5 h-3.5" />
              <span>Cards</span>
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Capital</span>
            </div>

            <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Accounts</span>
              </div>
              <ChevronRight className="w-3 h-3 text-muted-foreground/70" />
            </div>

            {/* Section "Workflows" */}
            <div className="pt-3 pb-1 px-2 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
              Workflows
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <Workflow className="w-3.5 h-3.5" />
              <span>Trake rutes</span>
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Payments</span>
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <Bell className="w-3.5 h-3.5" />
              <span>Notifications</span>
            </div>

            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground">
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </div>
          </aside>

          {/* Main content (bg-secondary/30) */}
          <main className="flex-1 p-3.5 md:p-4.5 flex flex-col gap-3.5 bg-secondary/30 min-w-0">
            {/* Greeting */}
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Welcome, Jane
              </h2>
            </div>

            {/* Action buttons row */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium text-[10px] shadow-2xs"
              >
                Send
              </button>
              <button
                type="button"
                className="bg-background border border-border text-foreground px-3 py-1 rounded-full font-medium text-[10px] shadow-2xs"
              >
                Request
              </button>
              <button
                type="button"
                className="bg-background border border-border text-foreground px-3 py-1 rounded-full font-medium text-[10px] shadow-2xs"
              >
                Transfer
              </button>
              <button
                type="button"
                className="bg-background border border-border text-foreground px-3 py-1 rounded-full font-medium text-[10px] shadow-2xs"
              >
                Deposit
              </button>
              <button
                type="button"
                className="bg-background border border-border text-foreground px-3 py-1 rounded-full font-medium text-[10px] shadow-2xs"
              >
                Pay Bill
              </button>
              <button
                type="button"
                className="bg-background border border-border text-foreground px-3 py-1 rounded-full font-medium text-[10px] shadow-2xs"
              >
                Create Invoice
              </button>
              <button
                type="button"
                className="text-[10px] text-muted-foreground flex items-center gap-1 font-medium ml-1"
              >
                <PlusCircle className="w-3 h-3" />
                Customize
              </button>
            </div>

            {/* Two equal-width cards (flex-1 basis-0) side by side */}
            <div className="flex gap-3 w-full">
              {/* Balance card */}
              <div className="flex-1 basis-0 bg-background rounded-xl p-3.5 border border-border/70 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center gap-1.5 text-muted-foreground font-medium text-[11px]">
                    <span>Mercury Balance</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                  </div>
                  <div className="text-xl font-bold tracking-tight text-foreground mt-1">
                    $8,450,190<span className="text-xs text-muted-foreground font-normal">.32</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] mt-1.5 text-muted-foreground">
                    <span>Last 30 Days</span>
                    <span className="text-emerald-600 font-medium flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      +$1.8M
                    </span>
                    <span className="text-rose-500 font-medium flex items-center gap-0.5">
                      <ArrowDownRight className="w-3 h-3" />
                      -$900K
                    </span>
                  </div>
                </div>

                {/* SVG area chart (h-20) with smooth cubic Bézier curve */}
                <div className="w-full h-20 mt-2 relative">
                  <svg
                    viewBox="0 0 400 80"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 65 C 45 60, 75 42, 120 45 C 165 48, 195 28, 240 32 C 285 36, 315 15, 355 18 C 375 19, 388 10, 400 8 L 400 80 L 0 80 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M 0 65 C 45 60, 75 42, 120 45 C 165 48, 195 28, 240 32 C 285 36, 315 15, 355 18 C 375 19, 388 10, 400 8"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Accounts card */}
              <div className="flex-1 basis-0 bg-background rounded-xl p-3.5 border border-border/70 flex flex-col justify-between shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground text-[11px]">Accounts</span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Plus className="w-3.5 h-3.5" />
                    <MoreVertical className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Three rows (py-3, no dividers, text-xs, justify-between) */}
                <div className="flex flex-col justify-around flex-1 mt-1">
                  <div className="flex items-center justify-between py-3 text-xs">
                    <span className="text-muted-foreground">Credit</span>
                    <span className="font-medium text-foreground tabular-nums">$98,125.50</span>
                  </div>
                  <div className="flex items-center justify-between py-3 text-xs">
                    <span className="text-muted-foreground">Treasury</span>
                    <span className="font-medium text-foreground tabular-nums">$6,750,200.00</span>
                  </div>
                  <div className="flex items-center justify-between py-3 text-xs">
                    <span className="text-muted-foreground">Operations</span>
                    <span className="font-medium text-foreground tabular-nums">$1,592,864.82</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transactions table */}
            <div className="bg-background rounded-xl p-3.5 border border-border/70 shadow-2xs">
              <div className="text-[11px] font-semibold text-foreground mb-2.5">
                Recent Transactions
              </div>
              <div className="w-full">
                <div className="grid grid-cols-4 pb-2 border-b border-border/60 text-[10px] text-muted-foreground font-medium">
                  <div>Date</div>
                  <div>Description</div>
                  <div>Amount</div>
                  <div className="text-right">Status</div>
                </div>

                <div className="divide-y divide-border/40 text-[11px]">
                  {/* Row 1: AWS -$5,200 Pending (amber) */}
                  <div className="grid grid-cols-4 py-2.5 items-center">
                    <div className="text-muted-foreground">Oct 12, 2026</div>
                    <div className="font-medium text-foreground">AWS</div>
                    <div className="font-medium text-foreground tabular-nums">-$5,200</div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-amber-600 font-medium text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                        Pending
                      </span>
                    </div>
                  </div>

                  {/* Row 2: Client Payment +$125,000 Completed (green) */}
                  <div className="grid grid-cols-4 py-2.5 items-center">
                    <div className="text-muted-foreground">Oct 11, 2026</div>
                    <div className="font-medium text-foreground">Client Payment</div>
                    <div className="font-medium text-emerald-600 tabular-nums">+$125,000</div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        Completed
                      </span>
                    </div>
                  </div>

                  {/* Row 3: Payroll -$85,450 Completed */}
                  <div className="grid grid-cols-4 py-2.5 items-center">
                    <div className="text-muted-foreground">Oct 09, 2026</div>
                    <div className="font-medium text-foreground">Payroll</div>
                    <div className="font-medium text-foreground tabular-nums">-$85,450</div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-muted-foreground font-medium text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 inline-block" />
                        Completed
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Office Supplies -$1,200 Completed */}
                  <div className="grid grid-cols-4 py-2.5 items-center">
                    <div className="text-muted-foreground">Oct 08, 2026</div>
                    <div className="font-medium text-foreground">Office Supplies</div>
                    <div className="font-medium text-foreground tabular-nums">-$1,200</div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-muted-foreground font-medium text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 inline-block" />
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
